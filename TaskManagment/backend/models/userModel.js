const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
        Username :{
            type : String,
            required : true,
        },
        Password :{
            type : String,
            required : true,
        },
})

const UserModel = mongoose.model("USer", UserSchema)

module.exports = UserModel
