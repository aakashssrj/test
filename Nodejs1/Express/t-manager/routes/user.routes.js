import express from 'express';
import { signup, login } from '../controllers/user.controller.js';

const router = express.Router();

// Import the user controller


router.post('/signup', signup);
router.post('/login', login);

export default router;
