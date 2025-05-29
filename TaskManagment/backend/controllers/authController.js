const UserModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const register = async (req,res) =>{
    const {Username,Password} = req.body;
    if(!Username || !Password){
        return res.status(400).json({message: "Please fill all the fields"})
    }
    try{
        const hashedPassword = await bcrypt.hash(Password,10)
        const newUSer = new UserModel({
            Username,
            Password: hashedPassword
        })
        await newUSer.save()
        return res.status(201).json({msg: "User Created" , success: true})
    }
    catch(err){
        return res.status(500).json({msg: "Internal Server Error", success: false})
    }
}

const login = async (req,res) =>{
    const {Username,Password} = req.body;
    if (!Username || !Password){
        return res.status(400).json({msg: "Please fill all the fields"})
    }
    try{
        const User = await UserModel.findOne({Username})
        if(!User){
            return res.status(400).json({msg: "User not found"})
        }
        const isMatch = await bcrypt.compare(Password,User.Password)
        if(!isMatch){
            return res.status(400).json({msg: "Invalid Credentials"})   
        }
        
        const token = jwt.sign({id: User._id} , process.env.JWT_SECRET, {expiresIn: "1h"})
        return res.status(200).json({msg:"Login Sucess ", success : true , token : token ,
            user:{
                id : User._id,
                Username : User.Username,
                Password : User.Password,
            }

        } )
      
    }
    catch(err){
        return res.status(500).json({msg: "Internal Server Error", success: false})
    }

}

module.exports = {
    register,
    login
}

