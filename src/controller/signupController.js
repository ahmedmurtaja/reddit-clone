const bcrypt = require('bcryptjs');
const signupQuery = require('../database/queries');
const signupSchema = require('../utils/validation');
const signToken = require('../utils/jwt');

const signup = (req, res, next) => {
  const { username, email, password } = req.body;
  signupSchema.validateAsync({ username, email, password })
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
