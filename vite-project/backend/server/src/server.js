import "dotenv/config";
import path from "path";
import express from "express";
import cors from "cors";

import chatRouter from "../routes/chat.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
  });
});

app.use("/api/chat", chatRouter);
// serve static files from the frontend build
// using the NODE_ENV check if in production, then serve the frontend files
// will run for production build to test in development, change to "development" and run "npm run dev"
if (process.env.NODE_ENV === "production") {
  app.use(express.static("vite-project/frontend/dist"));
  // use "/*splat" to catch all routes and serve the frontend index.html when using express 5 per express documentation, use "/*" when using express version 4.
  app.get("/*splat", (req, res) => {
    res.sendFile(path.resolve("vite-project/frontend/dist/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
