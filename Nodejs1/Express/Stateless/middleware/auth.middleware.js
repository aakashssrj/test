import jwt from "jsonwebtoken";

export const authMiddleware = (req, res , next) =>{
    const token = req.header("Authorization");
    if(!token){
        return res.status(401).json({ message: "No token provided" });
    }

    try {
       const decoded = jwt.verify(token , process.env.JWT_SECRET);
       req.user = decoded; 
   
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
    next();
}