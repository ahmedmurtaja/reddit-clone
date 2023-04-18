const userRouter = require('express').Router();
const signup = require('../controller');

userRouter.post('/signup', signup);

module.exports = userRouter;
