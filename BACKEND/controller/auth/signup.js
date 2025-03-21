const {userValidation} = require('../../utility/userValidation.utility')
const User = require('../../models/user.model')

const signup = async(req,res,next) => {
    try {
        const uservalues = await userValidation.validateAsync(req.body);
        console.log(uservalues)

        const {username , email , password } = uservalues   

        const userVerification = await User.findOne({
            username,
        })
        console.log(userVerification)
        if(userVerification){
            return res.status(200).json({
                success : false,
                message : "User Already Exists with the same Username"
            })
        }

        const newUser = new User({
            username,
            email,
            password
        })
        await newUser.save()    
        
        res.status(200).json({
            success  : true,
            message: "User Registered Successfully",
            data:uservalues
        })
    } catch (error) {
        next(error)
    }
}

module.exports = signup