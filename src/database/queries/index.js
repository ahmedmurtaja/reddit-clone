const getPosts = require('./posts/getAllPosts');
const getUserByEmail = require('./users/getUserByEmail');
const getUserByUsername = require('./users/getUserByUsername');
const insertPost = require('./posts/insertPost');
const signupQuery = require('./users/signupQuery');
const voteQuery = require('./votes/voteQuery');

module.exports = {
  signupQuery, getUserByEmail, getUserByUsername, getPosts, insertPost, voteQuery,

};
