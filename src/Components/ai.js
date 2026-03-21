import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_PROMPT = `
You are a chef assistant.

Create a recipe using given ingredients.

Return ONLY in this format:

Recipe Name:
<name>

Ingredients:
- item 1
- item 2

Steps:
1. step one
2. step two
`;

// ✅ Correct way to use env variable
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function getRecipeFromGemini(ingredientsArr) {

  // ✅ Input validation
  if (!ingredientsArr || ingredientsArr.length === 0) {
    return "Please add ingredients first.";
  }

  const ingredientsString = ingredientsArr.join(", ");

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: SYSTEM_PROMPT,
    });

    const result = await model.generateContent(
      `I have ${ingredientsString}. Give me a recipe.`
    );

    return result.response.text();

  } catch (err) {
    console.error("FULL ERROR:", err);
    return "Error: " + err.message;
  }
}
