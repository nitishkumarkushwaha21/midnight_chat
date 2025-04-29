import { Router } from "express";
import axios from "axios";
import { getPrompt } from "./promps"; // personality prompts
import dotenv from "dotenv";

dotenv.config();
const router = Router();

router.post("/", async (req, res) => {
  const { message, personality } = req.body;

  if (!message || !personality) {
    res.status(400).json({ error: "Missing message or personality" });
    return;
  }

  try {
    const prompt = getPrompt(personality);

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        // ✅ change this line from openchat to openrouter/auto
        model: "openrouter/auto",
        messages: [
          { role: "system", content: prompt },
          { role: "user", content: message },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:5173/", // Replace with your frontend domain in production
          "X-Title": "Waifu Chatroom", // optional
        },
      }
    );

    const reply = response.data.choices[0].message.content;
    res.json({ reply });
  } catch (err: any) {
    console.error("OpenRouter error:", err.response?.data || err.message);
    res.status(500).json({ error: "Something went wrong with AI response." });
  }
});

export default router;
