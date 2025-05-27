import { Router } from 'express';
const router = Router();
import authMiddleware from '../middlewares/auth.middleware.js';

router.get('/dashboard', authMiddleware , (req, res) => {
    res.send(`This is the dashboard Mr. ${req.user.name} 👨‍💻`);
});

export default router;