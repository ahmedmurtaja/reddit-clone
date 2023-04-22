const { deleteVote } = require('../../database/queries');
const { postIdSchema } = require('../../utils/validation');

const deleteVoteController = (req, res, next) => {
  const { postId } = req.params;
  const { id } = req.user;
  postIdSchema.validateAsync({ postId })
    .then(() => deleteVote(id, postId))
    .then(() => res.json(
      {
        success: true,
        data: 'Vote Deleted',
      },
    ))
    .catch((err) => next(err));
};

module.exports = deleteVoteController;
