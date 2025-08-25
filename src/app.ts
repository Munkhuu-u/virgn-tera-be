// src/app.ts
import express from "express";
import cors from "cors";
import { connectToDatabase } from "./database";
import formRoutes from "./routes/formRoutes";
import FormDataModel from "./models/FormData";

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("👋 Hello! Your server is running.");
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", formRoutes);

// Connect DB and start server
connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
});

// In your routes or app.ts
app.get("/api/formdata", async (req, res) => {
  const data = await FormDataModel.find();
  res.json(data);
});
