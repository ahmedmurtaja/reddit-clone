const { voteQuery } = require('../database/queries');
const { voteSchema } = require('../utils/validation');

const voteController = (req, res, next) => {
  const { postId, vote } = req.params;
  const { id } = req.user;
  voteSchema.validateAsync({ postId, vote }).then(() => voteQuery(postId, id, vote))
    .then((data) => res.json(
      {
        success: true,
        data: data.rows,
      },
    ))
    .catch((err) => next(err));
};

module.exports = voteController;
