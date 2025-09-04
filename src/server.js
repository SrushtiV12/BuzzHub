import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();

//middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome! BuzzHub Backend Running 🚀");
});



app.use("/api/auth", authRoutes);
app.use("/api/events", rateLimiter, eventRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((err) => {
  console.error("Failed to connect to DB", err);
});