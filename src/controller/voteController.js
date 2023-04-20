const { voteQuery } = require('../database/queries');

const voteController = (req, res, next) => {
  const { postId, vote } = req.params;
  const { id } = req.user;
  voteQuery(postId, id, vote)
    .then((data) => res.json(data.rows))
    .catch((err) => next(err));
};

module.exports = voteController;
