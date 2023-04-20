const postRouter = require('express').Router();
const { getAllPosts } = require('../controller');
const checkAuth = require('../middlewares/checkAuth');

postRouter.get('/', checkAuth, getAllPosts);

module.exports = postRouter;
