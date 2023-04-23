const userRouter = require('express').Router();
const { signup, signin, logout } = require('../controller');

userRouter.post('/signup', signup);
userRouter.post('/signin', signin);
userRouter.get('/logout', logout);

module.exports = userRouter;
