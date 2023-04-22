const joi = require('joi');

const commentSchema = joi.object({
  comment: joi.string().required(),
  postId: joi.number().required(),
});

module.exports = commentSchema;
