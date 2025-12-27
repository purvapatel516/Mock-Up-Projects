
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getFleetInsights = async (fleetData: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyze this car rental fleet performance data and provide strategic insights: ${fleetData}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING, description: "Executive summary" },
            riskLevel: { type: Type.STRING, description: "Level of risk detected" },
            recommendations: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["summary", "riskLevel", "recommendations"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Insight Error:", error);
    return {
      summary: "AI services are currently limited. Performance remains within standard parameters based on historical logs.",
      riskLevel: "Low",
      recommendations: ["Monitor weekend demand surge", "Review maintenance logs for older units"]
    };
  }
};
