const { getPosts } = require('../database/queries');

const getAllPosts = (req, res, next) => {
  getPosts()
    .then((data) => data.rows)
    .then((data) => res.json({
      success: true,
      data,
    })).catch((err) => next(err));
};

module.exports = getAllPosts;
