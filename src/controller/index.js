const newComment = require('./comments/addComment');
const getAllComments = require('./comments/getAllComments');
const getAllPosts = require('./posts/getPostsController');
const newPost = require('./posts/newPostController');
const logout = require('./users/logoutController');
const signin = require('./users/signinController');
const signup = require('./users/signupController');

module.exports = {
  signin, signup, getAllPosts, newPost, getAllComments, newComment, logout,
};
