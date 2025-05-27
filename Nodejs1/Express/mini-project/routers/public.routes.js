import { Router } from 'express';
const router = Router();
 import { generateToken } from '../utilis/token.validation.js';
router.get('/home' , (req, res) => {
    res.send('This is a Home🏡');
});

router.get('/generate-token' , (req, res) => {
    const token = generateToken();
    res.json({ token });
});

export default router;
