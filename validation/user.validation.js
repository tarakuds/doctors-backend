const Joi = require('joi')

const userLogin = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
})

const userRegister = Joi.object({
    firstname: Joi.string().min(2).max(30).required(),
    lastname: Joi.string().min(2).max(30).required(),
    phonenumber: Joi.number().min(2).max(30).required(),
    email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .required(),
    designation: Joi.string().valid('admin', 'doctor', 'patient').required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
})

module.exports = {userRegister, userLogin}