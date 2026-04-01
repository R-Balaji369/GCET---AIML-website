import { GoogleGenAI } from "@google/genai";

async function extractFaculty() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "List all the faculty members from https://gcet.edu.in/aiml/faculty-list with their name, designation, and qualification in JSON format.",
    config: {
      tools: [{urlContext: {}}]
    },
  });

  console.log(response.text);
}

extractFaculty();
