const userRouter = require('express').Router();
const { signup, signin } = require('../controller');

userRouter.post('/signup', signup);
userRouter.post('/signin', signin);

module.exports = userRouter;
