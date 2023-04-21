const getAllComments = require('./comments/getAllComments');
const getAllPosts = require('./posts/getPostsController');
const newPost = require('./posts/newPostController');
const signin = require('./users/signinController');
const signup = require('./users/signupController');

module.exports = {
  signin, signup, getAllPosts, newPost, getAllComments,
};
