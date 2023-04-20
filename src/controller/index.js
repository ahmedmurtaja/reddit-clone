const getAllPosts = require('./getPostsController');
const signin = require('./signinController');
const signup = require('./signupController');

module.exports = {
  signin, signup, getAllPosts,
};
