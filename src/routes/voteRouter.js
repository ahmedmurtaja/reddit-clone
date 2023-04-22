const voteRouter = require('express').Router();
const countVoteController = require('../controller/votes/countVoteController');
const deleteVoteController = require('../controller/votes/deleteVoteController');
const voteController = require('../controller/votes/voteController');
const checkAuth = require('../middlewares/checkAuth');

voteRouter.post('/:postId/:vote', checkAuth, voteController);
voteRouter.get('/:postId', countVoteController);
voteRouter.delete('/:postId', checkAuth, deleteVoteController); // user cannot delete vote if he/she didn't vote before(hn3ml check 3la db) but we handled it in DB deleteVote.js
module.exports = voteRouter;
