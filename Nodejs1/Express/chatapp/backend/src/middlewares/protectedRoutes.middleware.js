import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';


export const protectedRoutes = (req, res, next) => {
    try {
        const token = req.cookies.jwt 
        if(!token){
            return res.status(401).json({ message: 'Unauthorized access' });
        }

        const decoded = jwt.verify(token , process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({ message: 'Invalid token' });
        }

        const user = User.findById(decoded.userId)
        if(!user){
            return res.status(404).json({ message: 'User not found' });
        }

        req.user = user; //  add user object to the request object
        next(); 
    } catch (error) {
        console.error('Error in protectedRoutes middleware:', error);
        return res.status(500).json({ message: 'Internal server error' });
        
    }
}