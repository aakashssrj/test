import express from 'express';
import { checkSession } from '../middlewares/validateSession.middleware.js';
import {getTask , addTask , updateTask , deleteTask} from '../controllers/task.controller.js';


const router = express.Router();


router.get('/', checkSession ,getTask);
router.post('/' , checkSession , addTask);

export default router;
