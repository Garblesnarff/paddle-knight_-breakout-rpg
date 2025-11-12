
import { GoogleGenAI } from "@google/genai";

export const generateBackstory = async (): Promise<string> => {
    try {
        if (!process.env.API_KEY) {
            return "API Key not found. Please set the API_KEY environment variable. For now, here is a default story: You are the Paddle Knight, a lone hero chosen to wield the Sacred Paddle. Your quest is to drive back the invading Brick Horde and shatter the tyrannical Brick Lord. Go forth and be victorious!";
        }
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: "Generate a short, epic backstory for a hero called the 'Paddle Knight' who defends their kingdom from an invasion of evil bricks using a magic paddle and ball. Keep it under 100 words and write in a fantasy style.",
            config: {
                temperature: 0.8,
                topK: 40,
            }
        });

        return response.text;
    } catch (error) {
        console.error("Error generating backstory:", error);
        return "The bards are resting and cannot sing of your tale right now. Please try again later.";
    }
};
