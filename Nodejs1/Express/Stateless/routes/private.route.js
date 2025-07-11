import express from "express";
import dotenv from "dotenv";
import { authMiddleware } from "../middleware/auth.middleware.js";


const router = express.Router();

router.get('/private' , authMiddleware , (req, res) => {
    res.status(200).json({
        message: "Welcome to the private route",
        user: req.user
    });
});

export default router;
