import express from "express";
import User   from "../models/user.model.js";
import jwt from "jsonwebtoken";


const router = express.Router();


router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }
  const newuser = new User({
    username,
    password,
  });

  await newuser.save();

  res
    .status(201)
    .json({ message: "User registered successfully", user: newuser });
});


router.post('/login' , async(req,res) =>{
    const {username , password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }   

    const token = jwt.sign( {id :user.username}  , process.env.JWT_SECRET, {
        expiresIn: '1h'
    });

    res.status(200).json({
        message: "Login successful",
        token,
        user: {
            id: user._id,
            username: user.username,
            password: user.password
        }
    });



})

export default router;
