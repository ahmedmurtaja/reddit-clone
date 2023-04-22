const { countVote, getPost } = require('../../database/queries');
const CustomError = require('../../utils/CustomError');
const { postIdSchema } = require('../../utils/validation');

const countVoteController = (req, res, next) => {
  const { postId } = req.params;
  postIdSchema.validateAsync({ postId })
    .then(() => getPost(postId))
    .then((data) => {
      if (!data.rows.length) throw new CustomError('No Such Post', 404);
    })
    .then(() => countVote(postId))
    .then((data) => res.json(
      {
        success: true,
        data: data.rows,
      },
    ))
    .catch((err) => next(err));
};

module.exports = countVoteController;
