import puppeteer from "puppeteer";
import * as cheerio from "cheerio";
import axios from "axios";
import fs from "fs/promises";
import path from "path";
import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";

dotenv.config();

// Database configuration
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});

// Configuration
const CONFIG = {
  baseUrl: "https://help.appenate.com",
  kbUrl: "https://help.appenate.com/kb/",
  imageDir: "./downloaded_images",
  delayBetweenRequests: 5000, // 5 seconds between requests (5 seconds seems to work; less than that probably wont allow the previous request to finish)
  headless: true,
  // Login configuration: selectors can be customized via env vars if needed
  login: {
    url: null, // defaults to `${baseUrl}/login` when null
    usernameSelector:
      'input[type="text"], input[name="LoginId"], input[name="LoginId"]',
    passwordSelector: 'input[id="password"]',
    submitSelector: 'button[type="submit"], button.login, input[type="submit"]',
    postLoginSelector: "body", // element to wait for after login; keep generic
  },
};

// Parse simple CLI flags and env vars to allow testing a single article or limiting
function parseRunOptions() {
  const args = process.argv.slice(2);
  const opts = {
    singleArticleUrl: process.env.SINGLE_ARTICLE_URL || null,
    limit: null,
  };

  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if ((a === "--single" || a === "--single-url") && args[i + 1]) {
      opts.singleArticleUrl = args[i + 1];
      i++;
    } else if ((a === "--limit" || a === "--count") && args[i + 1]) {
      const n = parseInt(args[i + 1], 10);
      if (!Number.isNaN(n) && n > 0) opts.limit = n;
      i++;
    }
  }

  return opts;
}

// Initialize database tables
async function initDatabase() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS articles (
        id SERIAL PRIMARY KEY,
        url TEXT UNIQUE NOT NULL,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        html_content TEXT,
        category TEXT,
        scraped_at TIMESTAMP DEFAULT NOW()
      );
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS images (
        id SERIAL PRIMARY KEY,
        article_id INTEGER REFERENCES articles(id) ON DELETE CASCADE,
        original_url TEXT NOT NULL,
        local_path TEXT,
        alt_text TEXT,
        downloaded_at TIMESTAMP DEFAULT NOW()
      );
    `);

    console.log("✅ Database tables initialized");
  } finally {
    client.release();
  }
}

// Create image directory if it doesn't exist
async function ensureImageDir() {
  try {
    await fs.mkdir(CONFIG.imageDir, { recursive: true });
    console.log("✅ Image directory ready");
  } catch (error) {
    console.error("Error creating image directory:", error);
  }
}

// Extract article links from the Getting Started section
async function getArticleLinks(page) {
  console.log("🔍 Discovering articles from KB page...");
  console.log("Page:", page);

  await page.goto(CONFIG.kbUrl, { waitUntil: "networkidle0", timeout: 30000 });

  const html = await page.content();
  const $ = cheerio.load(html);

  const articles = [];

  // Find the Getting Started section and extract article links
  // Adjust selectors based on actual HTML structure
  $("a").each((i, elem) => {
    const href = $(elem).attr("href");
    const text = $(elem).text().trim();

    if (href && href.includes("/article/") && text) {
      const fullUrl = href.startsWith("http")
        ? href
        : `${CONFIG.baseUrl}${href}`;
      articles.push({
        url: fullUrl,
        title: text,
      });
    }
  });

  // Remove duplicates
  const uniqueArticles = Array.from(
    new Map(articles.map((a) => [a.url, a])).values()
  );

  console.log(`✅ Found ${uniqueArticles.length} articles`);
  return uniqueArticles;
}

// SSO: Attempt to login using credentials from env vars
async function login(page) {
  const username = process.env.LOGIN_USERNAME;
  const password = process.env.LOGIN_PASSWORD;
  if (!username || !password) {
    console.log('ℹ️  LOGIN_USERNAME or LOGIN_PASSWORD not set; skipping login');
    return true;
  }

  console.log(`🔐 Starting SSO login flow...`);

  try {
    // Step 1: Go directly to the KB page - this should trigger SSO redirect
    console.log('📍 Step 1: Navigating to KB page (will trigger SSO redirect)...');
    await page.goto(CONFIG.kbUrl, { 
      waitUntil: 'networkidle2', 
      timeout: 30000 
    });

    await delay(1000);
    const currentUrl = page.url();
    console.log(`📍 Current URL after KB navigation: ${currentUrl}`);

    // Check if we were redirected to sign-in page
    if (!currentUrl.includes('signin') && !currentUrl.includes('LogOn')) {
      console.log('✅ Already logged in!');
      return true;
    }

    // Step 2: If on help.appenate.com/signin, click the SSO button
    if (currentUrl.includes('help.appenate.com/signin')) {
      console.log('📍 Step 2: On signin page, clicking SSO button...');
      
      const signInButton = await page.evaluateHandle(() => {
        const buttons = Array.from(document.querySelectorAll('a, button'));
        return buttons.find(btn => btn.textContent.includes('Sign In on Appenate'));
      });

      if (signInButton && signInButton.asElement()) {
        console.log('✅ Found sign-in button, clicking...');
        await Promise.all([
          page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 15000 }).catch(() => {}),
          signInButton.asElement().click()
        ]);
        await delay(1000);
      }
    }

    // Step 3: Should now be on secure.appenate.com login page
    const loginUrl = page.url();
    console.log(`📍 Step 3: Current URL: ${loginUrl}`);

    if (!loginUrl.includes('secure.appenate.com')) {
      console.log('⚠️  Not on secure.appenate.com login page');
      return false;
    }

    // Step 4: Fill in login credentials
    console.log('📍 Step 4: Filling in login credentials...');

    await page.waitForSelector('input[name="LoginId"], input#LoginId', { timeout: 5000 });
    
    const userHandle = await page.$('input[name="LoginId"], input#LoginId');
    if (!userHandle) {
      console.error('❌ Could not find LoginId field');
      return false;
    }

    await userHandle.click({ clickCount: 3 });
    await userHandle.type(username, { delay: 50 });
    console.log('✅ Username entered');

    // Look for password field
    let passHandle = await page.$('input[type="password"], input#Password, input[name="Password"]');

    if (!passHandle) {
      console.log('⏭️  Password field not visible, clicking Next...');
      const nextButton = await page.$('button[type="submit"], input[type="submit"]');
      if (nextButton) {
        await nextButton.click();
        await delay(2000);
        passHandle = await page.$('input[type="password"], input#Password, input[name="Password"]');
      }
    }

    if (!passHandle) {
      console.error('❌ Could not find password field');
      return false;
    }

    await passHandle.click({ clickCount: 3 });
    await passHandle.type(password, { delay: 50 });
    console.log('✅ Password entered');

    // Step 5: Submit and wait for SSO to complete
    console.log('📍 Step 5: Submitting login form and waiting for SSO redirect...');
    
    const submitButton = await page.$('button[type="submit"], input[type="submit"]');
    
    if (submitButton) {
      // Click submit and wait for MULTIPLE navigations (SSO does several redirects)
      await submitButton.click();
      
      // Wait for first navigation (login processing)
      await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 20000 }).catch(() => {
        console.log('⚠️  First navigation timeout (this might be OK)');
      });
      
      console.log(`🔄 After login submit: ${page.url()}`);
      
      // Give more time for SSO redirects to complete
      await delay(5000);
      
      // Check if we need to wait for another navigation
      const afterLoginUrl = page.url();
      if (afterLoginUrl.includes('secure.appenate.com') && !afterLoginUrl.includes('Error')) {
        console.log('🔄 Waiting for SSO redirect to help.appenate.com...');
        await page.waitForNavigation({ 
          waitUntil: 'networkidle2', 
          timeout: 15000 
        }).catch(() => {
          console.log('⚠️  SSO redirect timeout');
        });
      }
      
      await delay(2000);
    }

    // Step 6: Check final URL
    const finalUrl = page.url();
    console.log(`🔍 Final URL: ${finalUrl}`);

    // If we hit an error page, try navigating directly to KB again
    if (finalUrl.includes('Error.html')) {
      console.log('⚠️  Error page detected, attempting to navigate to KB directly...');
      await delay(2000);
      await page.goto(CONFIG.kbUrl, { waitUntil: 'networkidle2', timeout: 30000 });
      await delay(2000);
      
      const retryUrl = page.url();
      console.log(`🔍 Retry URL: ${retryUrl}`);
      
      const isLoggedIn = retryUrl.includes('help.appenate.com/kb') && 
                         !retryUrl.includes('signin');
      
      if (isLoggedIn) {
        console.log('✅ Login successful after retry!');
        return true;
      }
    }

    // Check if we're logged in on help.appenate.com
    const isLoggedIn = finalUrl.includes('help.appenate.com') && 
                       !finalUrl.includes('signin') &&
                       !finalUrl.includes('login');

    if (isLoggedIn) {
      console.log('✅ SSO Login successful!');
      return true;
    } else {
      console.warn('⚠️  Login failed - final URL:', finalUrl);
      
      // Take screenshot for debugging
      await page.screenshot({ path: 'login-failed.png' });
      console.log('📸 Screenshot saved as login-failed.png');
      
      // Print page content to see error message
      const errorText = await page.evaluate(() => document.body.textContent);
      console.log('📄 Page content:', errorText.substring(0, 500));
      
      return false;
    }

  } catch (err) {
    console.error('❌ Login error:', err.message);
    console.log(`Current URL: ${page.url()}`);
    await page.screenshot({ path: 'login-error.png' }).catch(() => {});
    return false;
  }
}

// Download image and return local path
async function downloadImage(imageUrl, articleId, index) {
  try {
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
    const extension = path.extname(new URL(imageUrl).pathname) || ".jpg";
    const filename = `article_${articleId}_img_${index}${extension}`;
    const filepath = path.join(CONFIG.imageDir, filename);

    await fs.writeFile(filepath, response.data);
    console.log(`  📷 Downloaded image: ${filename}`);

    return filepath;
  } catch (error) {
    console.error(`  ❌ Failed to download image ${imageUrl}:`, error.message);
    return null;
  }
}

// Scrape a single article
async function scrapeArticle(page, articleUrl, articleTitle) {
  console.log(`\n📄 Scraping: ${articleTitle}`);
  console.log(`   URL: ${articleUrl}`);

  try {
    await page.goto(articleUrl, { waitUntil: "networkidle0", timeout: 30000 });

    const html = await page.content();
    const $ = cheerio.load(html);

    // Extract title (try multiple selectors)
    const title =
      articleTitle ||
      $("h1").first().text().trim() ||
      $("article h1").first().text().trim() ||
      $("title").text().trim();

    // Extract main content
    // Adjust selector based on actual article structure
    const contentSelectors = [
      "article .article-content",
      ".kb-article-content",
      ".entry-content",
      "article",
      ".content",
    ];

    let $content = null;
    for (const selector of contentSelectors) {
      if ($(selector).length > 0) {
        $content = $(selector).first();
        break;
      }
    }

    if (!$content) {
      console.log("  ⚠️  Could not find article content");
      return null;
    }

    // Extract text content
    const textContent = $content.text().trim();
    const htmlContent = $content.html();

    // Extract category if available
    const category =
      $(".category").first().text().trim() ||
      $(".kb-category").first().text().trim() ||
      "Getting Started";

    // Save article to database
    const client = await pool.connect();
    let articleId;

    try {
      const result = await client.query(
        `INSERT INTO articles (url, title, content, html_content, category) 
         VALUES ($1, $2, $3, $4, $5) 
         ON CONFLICT (url) DO UPDATE 
         SET title = $2, content = $3, html_content = $4, category = $5, scraped_at = NOW()
         RETURNING id`,
        [articleUrl, title, textContent, htmlContent, category]
      );

      articleId = result.rows[0].id;
      console.log(`  ✅ Saved article (ID: ${articleId})`);
    } finally {
      client.release();
    }

    // Extract and download images
    const images = [];
    $content.find("img").each((i, elem) => {
      const src = $(elem).attr("src");
      const alt = $(elem).attr("alt") || "";

      if (src) {
        const fullUrl = src.startsWith("http")
          ? src
          : `${CONFIG.baseUrl}${src}`;
        images.push({ url: fullUrl, alt, index: i });
      }
    });

    console.log(`  📷 Found ${images.length} images`);

    // Download images and save to database
    for (const img of images) {
      const localPath = await downloadImage(img.url, articleId, img.index);

      if (localPath) {
        const client = await pool.connect();
        try {
          await client.query(
            `INSERT INTO images (article_id, original_url, local_path, alt_text) 
             VALUES ($1, $2, $3, $4)`,
            [articleId, img.url, localPath, img.alt]
          );
        } finally {
          client.release();
        }
      }
    }

    return { articleId, title, imageCount: images.length };
  } catch (error) {
    console.error(`  ❌ Error scraping article:`, error.message);
    return null;
  }
}

// Delay function
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Main scraper function
async function main() {
  console.log("🚀 Starting Appenate KB Scraper\n");
  const runOptsPreview = parseRunOptions();
  if (runOptsPreview.singleArticleUrl)
    console.log(`  → singleArticleUrl: ${runOptsPreview.singleArticleUrl}`);
  if (runOptsPreview.limit) console.log(`  → limit: ${runOptsPreview.limit}`);

  // Initialize
  await initDatabase();
  await ensureImageDir();

  // Launch browser
  const browser = await puppeteer.launch({
    headless: CONFIG.headless,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-blink-features=AutomationControlled", // Hide automation
    ],
  });

  const page = await browser.newPage();

  // Anti-detection measures
  await page.evaluateOnNewDocument(() => {
    Object.defineProperty(navigator, "webdriver", {
      get: () => false,
    });

    // Add chrome object that headless lacks
    window.chrome = {
      runtime: {},
    };

    // Randomize plugins
    Object.defineProperty(navigator, "plugins", {
      get: () => [1, 2, 3, 4, 5],
    });
  });

  // Set realistic user agent
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  );

  // Set extra headers
  await page.setExtraHTTPHeaders({
    "Accept-Language": "en-US,en;q=0.9",
    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  });

  await page.setViewport({ width: 1920, height: 1080 });
  // If login credentials provided, attempt to login before scraping
  if (process.env.LOGIN_USERNAME && process.env.LOGIN_PASSWORD) {
    const ok = await login(page);
    if (!ok) {
      console.error("❌ Login failed — aborting");
      await browser.close();
      await pool.end();
      process.exit(1);
    }
  }

  try {
    // Get all article links
    const articles = await getArticleLinks(page);

    if (articles.length === 0) {
      console.log("⚠️  No articles found. Check the selectors.");
      return;
    }

    console.log(`\n📚 Starting to scrape ${articles.length} articles...\n`);

    // Scrape each article
    let successCount = 0;
    for (let i = 0; i < articles.length; i++) {
      const article = articles[i];
      console.log(`[${i + 1}/${articles.length}]`);

      const result = await scrapeArticle(page, article.url, article.title);

      if (result) {
        successCount++;
      }

      // Delay between requests to be respectful
      if (i < articles.length - 1) {
        await delay(CONFIG.delayBetweenRequests);
      }
    }

    console.log(`\n✅ Scraping complete!`);
    console.log(
      `   Successfully scraped: ${successCount}/${articles.length} articles`
    );
  } catch (error) {
    console.error("❌ Fatal error:", error);
  } finally {
    await browser.close();
    await pool.end();
  }
}

// Run the scraper
main().catch(console.error);

// // close after 10 seconds of no activity
// let lastActivity = Date.now();
// const activityInterval = setInterval(() => {
//   if (Date.now() - lastActivity > 10000) {
//     console.log("⏲️  No activity for 10 seconds, closing browser");
//     browser.close().catch(() => {});
//     clearInterval(activityInterval);
//   }
// }, 5000);
