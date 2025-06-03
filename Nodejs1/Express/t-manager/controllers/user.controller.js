import { signupRegister , loginUser  } from "../services/signup.services.js";

export const signup = async (req,res)  =>{
    const {username , password} = req.body;
    
    try {
        const user = await signupRegister(username , password);
        
        res.status(201).json({
            success : true,
            message : "User Registered",
            data : user
        })
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
}

export const login = async (req,res) =>{
    const {username , password} = req.body
    try {
        const user = await loginUser(username , password)
        
        req.session.userId = user._id;
        
        res.status(200).json({
            success : true,
            message : "User Logged In",
            data : user
        })
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

export const logout = (req,res) =>{
    res.clearCookie("connect.sid");
    req.session.destroy((err) => {
        if (err) {
            console.error("Error during logout:", err);
            return res.status(500).json({
                success: false,
                message: "Internal Server Error"
            });
        }
        res.status(200).json({
            success: true,
            message: "User Logged Out"
        });
    });
}