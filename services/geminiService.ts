
import { GoogleGenAI, Type } from "@google/genai";
import { VINCIFY_STRATEGY_CONTEXT } from "../constants";
import { VideoScript, ContentCategory, TimeSlot } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const scriptSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      day: { type: Type.INTEGER },
      slot: { type: Type.STRING },
      category: { type: Type.STRING },
      hook: { type: Type.STRING },
      value: { type: Type.STRING },
      product: { type: Type.STRING },
      cta: { type: Type.STRING },
      description: { type: Type.STRING },
      keywords: { type: Type.ARRAY, items: { type: Type.STRING } },
    },
    required: ["day", "slot", "category", "hook", "value", "product", "cta", "description"]
  }
};

export async function generateBatchScripts(startDay: number, count: number): Promise<VideoScript[]> {
  const prompt = `
    Based on the following strategy for the app Vincify:
    ${VINCIFY_STRATEGY_CONTEXT}
    
    Generate exactly ${count * 3} video scripts for Days ${startDay} to ${startDay + count - 1}.
    Each day has 3 slots: Morning, Mid-Day, Evening.
    Follow the Category A, B, C distribution rules (mostly A/B, one C every 2-3 days).
    Ensure scripts are optimized for TikTok, Reels, and YouTube Shorts.
    Include hooks, standalone value, product reveal, and CTA.
    Write high-quality descriptions with SEO keywords.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: scriptSchema,
      },
    });

    const rawData = JSON.parse(response.text || "[]");
    return rawData.map((item: any, index: number) => ({
      ...item,
      id: `${item.day}-${item.slot}-${index}`,
      category: item.category as ContentCategory,
      slot: item.slot as TimeSlot,
    }));
  } catch (error) {
    console.error("Failed to generate scripts:", error);
    return [];
  }
}
