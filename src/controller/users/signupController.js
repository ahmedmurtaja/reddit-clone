const bcrypt = require('bcryptjs');
const { signupQuery, getUserByEmail, getUserByUsername } = require('../../database/queries');
const { signupSchema } = require('../../utils/validation');
const { signToken } = require('../../utils/jwt');
const CustomError = require('../../utils/CustomError');

const signup = (req, res, next) => {
  const { username, email, password } = req.body;
  signupSchema.validateAsync({ username, email, password })
    .then(() => getUserByEmail(email))
    .then((data) => {
      if (data.rows[0]) throw new CustomError('Email Already Exist , Please Signing instead', 400);
    })
    .then(() => getUserByUsername(username))
    .then((data) => { if (data.rows[0]) throw new CustomError('Username Already Exist , Please Choose another Username', 400); })
    .then(() => bcrypt.hash(password, 10))
    .then((hashedPassword) => signupQuery({ username, email, password: hashedPassword }))
    .then((data) => data.rows[0])
    .then((data) => {
      req.user = data;
      return signToken(data);
    })
    .then((token) => {
      res.cookie('token', token).json(
        {
          success: true,
          data: {
            message: 'User created successfully',
            user: req.user,
          },
        },
      );
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = signup;
