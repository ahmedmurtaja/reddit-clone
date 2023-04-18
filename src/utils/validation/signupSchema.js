const joi = require('joi');

const signupSchema = joi.object({
  username: joi.string().min(3).max(30).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).max(30).required(),
});

module.exports = signupSchema;
