import { GoogleGenAI } from "@google/genai";
// your-script.mjs or with "type": "module" in package.json
import dotenv from 'dotenv';
dotenv.config({ path: '.env.development' });

const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-pro",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

await main();