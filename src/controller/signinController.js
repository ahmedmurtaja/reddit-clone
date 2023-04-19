const bcrypt = require('bcryptjs');
const { signinSchema } = require('../utils/validation');
const { getUserByEmail } = require('../database/queries');
const CustomError = require('../utils/CustomError');
const signToken = require('../utils/jwt');

const signin = (req, res, next) => {
  const { email, password } = req.body;
  signinSchema.validateAsync({ email, password })
    .then(() => getUserByEmail(email))
    .then((data) => {
      if (!data.rows.length) throw new CustomError('Wrong Email Or Password', 400);
      return data.rows[0];
    })
    .then((data) => {
      const { id, username } = data;
      req.user = { id, username, email };
      return bcrypt.compare(password, data.password);
    })
    .then((isMatch) => {
      if (!isMatch) throw new CustomError('Wrong Email Or Password', 400);
      return signToken(req.user);
    })
    .then((token) => {
      res.cookie('token', token, { httpOnly: true })
        .json(
          {
            success: true,
            message: 'You are logged in Successfully',
            statusCode: 200,
          },
        );
    })
    .catch((err) => next(err));
};

module.exports = signin;
