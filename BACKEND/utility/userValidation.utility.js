const joi = require('joi')

const userValidation = joi.object({
    username:joi.string().min(2).required(),
    email:joi.string().min(2).required(),
    password:joi.string().min(2).required()

})

module.exports = {userValidation}