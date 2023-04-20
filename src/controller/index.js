const getAllPosts = require('./getPostsController');
const newPost = require('./newPostController');
const signin = require('./signinController');
const signup = require('./signupController');

module.exports = {
  signin, signup, getAllPosts, newPost,
};
