const { insertPost } = require('../../database/queries');
const { postSchema } = require('../../utils/validation');

const newPost = (req, res, next) => {
  const { content } = req.body;
  const { id } = req.user;
  postSchema.validateAsync({ content })
    .then(() => insertPost(content, id))
    .then((data) => data.rows)
    .then((data) => res.json({
      success: true,
      data,
    }))
    .catch((err) => next(err));
};
module.exports = newPost;
