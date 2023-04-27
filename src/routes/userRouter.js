const userRouter = require('express').Router();
const { signup, signin, logout } = require('../controller');
const checkAuth = require('../middlewares/checkAuth');

userRouter.post('/signup', signup);
userRouter.post('/signin', signin);
userRouter.get('/logout', checkAuth, logout);
userRouter.get('/checklogin', checkAuth, (req, res) => {
  res.status(200).json({
    status: 200,
    success: true,
    message: 'Authorized',
  });
});

module.exports = userRouter;
