import { validateToken } from "../utilis/token.validation.js";

const authMiddleware = (req,res,next)=>{

    const token = req.headers['authorization'];

    if (token && validateToken(token)){
        req.user = {name : 'John Doe', role: 'admin'}; // Mock user data
    }
    next();
}

export default authMiddleware; 