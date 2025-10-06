# support-scraper

Small scraper for Appenate KB used during development.

How to run (single-article / test modes):

- Install dependencies (if not already):

```bash
npm install
```

- Run normally (scrapes discovered KB articles):

```bash
node scraper.js
```

- Run a single article (accepts full URL or path):

```bash
# full URL
node scraper.js --single https://help.appenate.com/article/some-article

# relative path
node scraper.js --single /article/some-article

# or via env var
SINGLE_ARTICLE_URL="/article/some-article" node scraper.js
```

- Limit the number of discovered articles (useful for quick tests):

```bash
node scraper.js --limit 2
```

Notes:
- The script uses `DATABASE_URL` from environment and will create tables if they don't exist.
- Images are saved to `./downloaded_images` by default.
- The default delay between requests is 2s; adjust `CONFIG.delayBetweenRequests` in `scraper.js`.

Login (headful testing)
---------------------------------
If the KB requires authentication, set these env vars (or add to your `.env`):

```
LOGIN_USERNAME=your-username-or-email
LOGIN_PASSWORD=your-password
# optional overrides
LOGIN_URL=https://help.appenate.com/login
# If the page uses non-standard selectors, override these
LOGIN_USERNAME_SELECTOR="input[name=\"email\"]"
LOGIN_PASSWORD_SELECTOR="input[name=\"password\"]"
LOGIN_SUBMIT_SELECTOR="button[type=\"submit\"]"
```

Run with headful mode (so you can watch the browser):

```bash
# set headless to false in scraper.js or run with an env var if you prefer
node scraper.js --single /article/creating-forms-with-ai/
```
