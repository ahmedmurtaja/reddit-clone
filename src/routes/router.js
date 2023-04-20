const express = require('express');
const userRouter = require('./userRouter');
const postRouter = require('./postRouter');
const voteRouter = require('./voteRouter');

const router = express.Router();

router.use('/users', userRouter);
router.use('/posts', postRouter);
router.use('/vote', voteRouter);

module.exports = router;
