import express from "express";
import { createEvent, getEvents, joinEvent } from "../controllers/eventController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createEvent);
router.get("/", getEvents);
router.put("/:id/join", protect, joinEvent);

export default router;
