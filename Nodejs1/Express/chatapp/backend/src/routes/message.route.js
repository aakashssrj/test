import express from "express";
import { protectedRoutes } from "../middlewares/protectedRoutes.middleware.js";
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controllers.js";

const router = express.Router();

router.get('/users' , protectedRoutes , getUsersForSidebar)
router.get('/:id' , protectedRoutes , getMessages)
router.post('/send/:id' , protectedRoutes , sendMessage)


export default router;