const joi = require('joi');

const postIdSchema = joi.object({
  postId: joi.number().integer().required(),
});

module.exports = postIdSchema;
