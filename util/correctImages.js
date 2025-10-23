import * as fs from "fs";
import chalk from "chalk";
import dotenv from "dotenv";
import images from "./appenateTestImages.js";
import { GoogleGenAI } from "@google/genai";
dotenv.config();

// black #333333
// blue  #30597C
// red #D72638
// silver #C0C0C0
// white #FAFAFA

const modelId = "models/gemini-2.5-flash-image";
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  endpoint: "https://northamerica-northeast1-genai.googleapis.com",
});

async function generateImage(image) {
  console.log(chalk.yellow("Creating image -->"), image.original_url);
  const promptText =
    "Change all instances of the color orange (specifically hex codes #e89a46 and #e78e45, and any similar shades of orange) to a dark charcoal color (#333333). For any orange bottom borders found under titles, update their color to #D72638. If any 'Appenate' logo is present, remove it completely and replace it with X-Forms by SolidStride.";

  try {
    console.log("Downloading image...");
    const res = await fetch(image.original_url);
    const buffer = await res.arrayBuffer();
    const ogImage = Buffer.from(buffer).toString("base64");
    // im leaving this here for now (if we need to pass the logo image, so far I havent liked the end edit results xd)
    // const logoFilePath = "../assets/logo.png"; // Adjust this path as needed
    // const logoImageBuffer = fs.readFileSync(logoFilePath);
    // const logoImage = logoImageBuffer.toString("base64");

    console.log("Creating updated image...");
    const response = await ai.models.generateContent({
      model: modelId,
      contents: [
        {
          role: "user",
          parts: [
            { text: promptText },
            {
              inlineData: {
                mimeType: "image/png",
                data: ogImage,
              },
            },
            // {
            //   inlineData: {
            //     mimeType: "image/png",
            //     data: logoImage,
            //   },
            // },
          ],
        },
      ],
    });

    console.log("DEBUG ->", response.candidates?.[0]?.content.parts);

    // sometimes the response comes in position 0 and someother time in 1, so i'm addinf this for now
    const base64Image = response.candidates?.[0]?.content.parts[0].inlineData
      ? response.candidates?.[0]?.content.parts[0]?.inlineData?.data
      : response.candidates?.[0]?.content.parts[1]?.inlineData?.data;

    if (base64Image) {
      fs.writeFileSync(
        `../corrected_images/image_${image.article_id}-${image.id}-with-logo.png`,
        Buffer.from(base64Image, "base64")
      );
      console.log("✅ Saved updated image as updated-image.png");
    } else {
      console.log("⚠️ No image found in response.");
    }
  } catch (error) {
    console.log("Somehing happened", error || error.message);
  }
}

async function run() {
  for (let i = 0; i < 1; i++) {
    console.log(chalk.yellow("Generating ->", images[i].original_url));
    generateImage(images[i]);
  }
}

run();
