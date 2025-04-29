import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRouter from "./chat";

dotenv.config();

const app = express();
app.use(cors({
  origin: process.env.FRONTEND_URL, // frontend URL
  credentials: true, //
}));
app.use(express.json());

app.use("/chat", chatRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
