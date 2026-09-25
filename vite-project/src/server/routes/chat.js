import express from "express";
import { generateResponse } from "../services/gemini.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        error: "Prompt is required",
      });
    }

    const response = await generateResponse(prompt);

    res.json({
      response,
    });
  } catch (error) {
    console.error("Gemini error:", error);

    const status = error.status || 500;

    res.status(status).json({
      error:
        status === 503
          ? "Gemini is temporarily unavailable. Please try again."
          : "Failed to generate response",
    });
  }
});

export default router;
