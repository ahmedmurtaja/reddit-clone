const postRouter = require('express').Router();
const checkAuth = require('../middlewares/checkAuth');

postRouter.get('/', checkAuth, (req, res) => {
  res.json({
    message: 'should return posts',
  });
});

module.exports = postRouter;
