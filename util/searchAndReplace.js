import chalk from "chalk";
import * as fs from "fs";
import articles from "./appenateArticles.js";

function run() {
  // const regex = new RegExp(`secure\\.${asasd}\\.com`, "i"); // on v2 Ill make the company name dynamic
  const updatedArticles = [];
  let count = 0;

  for (let i = 0; i < articles.length; i++) {
    console.log(`Checking ${articles[i].title}`);
    console.log("\n");
    const { title, content, html_content } = articles[i];

    const articleToUpdate = {
      title,
      content,
      html_content,
    };

    let stringifiedArticle = JSON.stringify(articleToUpdate);

    if (/secure\.appenate\.com/i.test(stringifiedArticle)) {
      console.log(chalk.yellow("Updating secure.appenate to secure.xforms"));
      stringifiedArticle = stringifiedArticle.replace(
        /secure\.appenate/gi,
        "secure.x-forms"
      );
    }

    // 2️⃣ Update plain text "appenate" → "X-Forms", skipping any URLs
    const urlRegex = /\bhttps?:\/\/[^\s"']+/gi;
    const urls = stringifiedArticle.match(urlRegex) || [];
    const segments = stringifiedArticle.split(urlRegex);

    let iUrl = 0;
    const replacedSegments = segments.map((seg) =>
      // Replace all occurrences of 'appenate' not in URLs, skip 'help.appenate.com'
      seg.replace(/(?<!help\.)appenate/gi, "X-Forms")
    );

    stringifiedArticle = replacedSegments.reduce((acc, seg) => {
      const url = urls[iUrl++] || "";
      return acc + seg + url;
    }, "");

    if (stringifiedArticle !== JSON.stringify(articleToUpdate)) {
      count++;
      console.log(chalk.yellow("Updated appenate to X-Forms outside URLs"));
    }

    const parsedArticled = JSON.parse(stringifiedArticle);
    const updatedArticle = {
      id: articles[i].id,
      url: articles[i].url,
      ...parsedArticled,
      category: articles[i].category,
    };

    updatedArticles.push(updatedArticle);
  }

  fs.writeFile(
    "./xformsArticles.json",
    JSON.stringify(updatedArticles),
    (err) => {
      if (err) {
        console.error("Error saving file:", err);
      } else {
        console.log("✅ Article saved as JSON!");
      }
    }
  );
  console.log(chalk.green("Total updated articles: "), count);
}

run();
