import * as fs from "fs";
import chalk from "chalk";
import dotenv from "dotenv";
import images from "./appenateTestImages.js";
import { GoogleGenAI } from "@google/genai";
dotenv.config();

const modelId = "models/gemini-2.5-flash-image";
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  endpoint: "https://northamerica-northeast1-genai.googleapis.com",
});

async function generateImage(image) {
  console.log(chalk.yellow("Creating image -->"), image.original_url);
  const promptText =
    " Update orange background to be colour #3333. Update any titles orange bottom borders to be #D72638. Please remove any Appenate wording and logo";

  try {
    console.log("Creating updated image...");
    const response = await ai.models.generateContent({
      model: modelId,
      contents: [
        promptText,
        {
          fileData: {
            mimeType: "image/png",
            fileUri: image.original_url,
          },
        },
      ],
    });

    const base64Image =
      response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

    if (base64Image) {
      fs.writeFileSync(
        `../corrected_images/image_${image.article_id}-${image.id}`,
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
  for (let i = 0; i < images.length; i++) {
    generateImage(images[i]);
  }
}

run();

// black #3333
// blue  #30597C
// red #D72638
// silver #C0C0C0
// white #FAFAFA
