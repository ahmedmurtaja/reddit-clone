const signupQuery = require('../database/queries');

const signup = (req, res) => {
  const { username, email, password } = req.body;
  console.log("signup");
  signupQuery({ username, email, password }).then((data) => res.json({ data: data.rows }))
    .catch((err) => res.json(err));
};

module.exports = signup;
