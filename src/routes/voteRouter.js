const voteRouter = require('express').Router();
const voteController = require('../controller/votes/voteController');
const checkAuth = require('../middlewares/checkAuth');

voteRouter.post('/:postId/:vote', checkAuth, voteController);
module.exports = voteRouter;
