const joi = require('joi');

const postSchema = joi.object().keys({
  content: joi.string().required(),
});

module.exports = postSchema;
