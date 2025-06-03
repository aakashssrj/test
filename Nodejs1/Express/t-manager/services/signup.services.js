import bcrypt from 'bcrypt'
import User from './../models/user.model.js';


export const signupRegister = async (username , password)=>{
   
    const hashedPassword = await bcrypt.hash(password , 10);
    const newUser = new User({  
        username,
        password: hashedPassword
    });

    await newUser.save();
    return newUser;
}

export const loginUser = async (username , password) =>{
    const user = await User.findOne({ username})
    if(!user || !(await bcrypt.compare(password , user.password))){
        throw new Error("User not found");
    }
    return user;
}