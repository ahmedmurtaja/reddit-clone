const bcrypt = require('bcryptjs');
const signupQuery = require('../database/queries');
const signupSchema = require('../utils/validation');

const signup = (req, res) => {
  const { username, email, password } = req.body;
  signupSchema.validateAsync({ username, email, password })
    .then(() => bcrypt.hash(password, 10))
    .then((hashedPassword) => signupQuery({ username, email, password: hashedPassword }))
    .then((data) => data.rows)
    .then((data) => res.json(data))
    .catch((err) => {
      if (err.isJoi === true) res.status(400).json({ error: err.details[0].message });
      else res.status(500).json({ error: err.message });
    });
};

module.exports = signup;
