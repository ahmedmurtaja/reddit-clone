const { getPost } = require('../../database/queries');
const addCommentsQuery = require('../../database/queries/comments/addCommentsQuery');
const CustomError = require('../../utils/CustomError');
const commentSchema = require('../../utils/validation/commentsSchema');

const newComment = (req, res, next) => {
  const { id } = req.user;
  const { postId } = req.params;
  const { comment } = req.body;
  commentSchema.validateAsync({ postId, comment })
    .then(() => getPost(postId))
    .then((data) => {
      if (!data.rows.length) throw new CustomError('Post Not Found', 404);
    })
    .then(() => addCommentsQuery(comment, id, postId))
    .then((data) => res.json(
      {
        success: true,
        data: data.rows,
      },
    ))
    .catch((err) => next(err));
};

module.exports = newComment;
