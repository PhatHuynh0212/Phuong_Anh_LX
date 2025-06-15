import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

// API Routes
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("WELCOME TO PALX API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  // Connect to MongoDB
  connectDB();
});
