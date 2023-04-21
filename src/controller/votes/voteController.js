const { voteQuery, checkVote } = require('../../database/queries');
const { voteSchema } = require('../../utils/validation');
const CustomError = require('../../utils/CustomError');

const voteController = (req, res, next) => {
  const { postId, vote } = req.params;
  const { id } = req.user;
  voteSchema.validateAsync({ postId, vote })
    .then(() => checkVote(id, postId))
    .then((data) => {
      if (data.rows.length && data.rows[0].vote === parseInt(vote, 10)) throw new CustomError('You Already Voted', 400);
    })
    .then(() => voteQuery(postId, id, vote))
    .then((data) => res.json(
      {
        success: true,
        data: data.rows,
      },
    ))
    .catch((err) => next(err));
};

module.exports = voteController;
