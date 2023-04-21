const getPosts = require('./posts/getAllPosts');
const getUserByEmail = require('./users/getUserByEmail');
const getUserByUsername = require('./users/getUserByUsername');
const insertPost = require('./posts/insertPost');
const signupQuery = require('./users/signupQuery');
const voteQuery = require('./votes/voteQuery');
const checkVote = require('./votes/checkVote');
const deleteVote = require('./votes/deleteVote');

module.exports = {
  signupQuery,
  getUserByEmail,
  getUserByUsername,
  getPosts,
  insertPost,
  voteQuery,
  checkVote,
  deleteVote,
};
