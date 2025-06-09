import express from "express";
import { signup, login, logout, updateUser, checkAuth } from "../controllers/auth.controllers.js"; 
import { protectedRoutes } from "../middlewares/protectedRoutes.middleware.js";

const router = express.Router();

router.post('/signup' , signup)
router.post('/login' , login)
router.post('/logout' , logout);
router.put('/update',protectedRoutes, updateUser);

router.post ('/check',protectedRoutes, checkAuth);



export default router;

