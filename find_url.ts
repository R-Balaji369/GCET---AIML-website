import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function findFacultyUrl() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Find the exact URL for the faculty list of the Artificial Intelligence and Machine Learning (AI & ML) department at Geethanjali College of Engineering and Technology (GCET). The main site is https://gcet.edu.in/.",
    config: {
      tools: [{ googleSearch: {} }],
    },
  });

  console.log(response.text);
}

findFacultyUrl();
