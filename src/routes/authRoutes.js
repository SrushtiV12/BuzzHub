import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";

const router = express.Router();

// router.get("/register", (req, res) => {
//   res.send("Register route is alive ✅ Use POST instead");
// });

// router.get("/login", (req, res) => {
//   res.send("Login route is alive ✅ Use POST instead");
// });

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
