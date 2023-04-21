const { getAllCommentsQuery, getPost } = require('../../database/queries');
const CustomError = require('../../utils/CustomError');
const { postIdSchema } = require('../../utils/validation');

const getAllComments = (req, res, next) => {
  const { postId } = req.params;
  postIdSchema.validateAsync({ postId })
    .then(() => getPost(postId))
    .then((data) => {
      if (!data.rows.length) throw new CustomError('Post Not Found', 404);
    })
    .then(() => getAllCommentsQuery(postId))
    .then(((data) => data.rows))
    .then((data) => res.json(
      {
        success: true,
        data,
      },
    ))
    .catch((err) => next(err));
};

module.exports = getAllComments;
