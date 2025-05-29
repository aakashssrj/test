import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { getAllTasks, createTask, updateTask, deleteTask } from "../controllers/task.controller.js";

const router = Router();

// Placeholder for task-related controllers

router.get('/' , authMiddleware , getAllTasks);
router.post('/' , authMiddleware , createTask);
router.put('/:id' , authMiddleware, updateTask);
router.delete('/:id' , authMiddleware, deleteTask);


export default router;