import User from '../models/user.model.js';

export const signup = async (req,res)  =>{
    const {username , password} = req.body;
    // Validate input
    try {
    if(!username || !password){
        return res.status(400).send({
            status: 'failed',
            message: 'Username and password are required'
        });
    }

    const newUser = await new User({
        username,
        password
    })

    await newUser.save()
    res.send(201).json({
        success: true,
        message: 'User created successfully',
        data : newUser
    })    
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
    

}

export const login = (req,res) =>{

}