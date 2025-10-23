import chalk from "chalk";
import articles from "./appenateArticles.js";

function run() {
  let articlesWithVideo = 0;

  for (const article of articles) {
    if (article.html_content.includes("src=\"https://player.vimeo.com/video")) {
      articlesWithVideo++;
    }
  }
  console.log(chalk.green("Total articles with videos ->"), articlesWithVideo);
}

run();
