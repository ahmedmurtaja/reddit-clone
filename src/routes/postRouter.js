const postRouter = require('express').Router();
const { getAllPosts, newPost } = require('../controller');
const checkAuth = require('../middlewares/checkAuth');

postRouter.get('/', getAllPosts);
postRouter.post('/new', checkAuth, newPost);
module.exports = postRouter;
