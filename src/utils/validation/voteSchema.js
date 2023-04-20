const Joi = require('joi');

const voteSchema = Joi.object({
  vote: Joi.number().integer().valid(1, -1).required(),
});
module.exports = voteSchema;
