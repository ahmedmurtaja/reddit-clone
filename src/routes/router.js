const express = require('express');
const userRouter = require('./userRouter');
const postRouter = require('./postRouter');
const voteRouter = require('./voteRouter');
const commentsRouter = require('./commentsRouter');

const router = express.Router();

router.use('/users', userRouter);
router.use('/posts', postRouter);
router.use('/vote', voteRouter);
router.use('/comments', commentsRouter);

module.exports = router;
