const getPosts = require('./getAllPosts');
const getUserByEmail = require('./getUserByEmail');
const getUserByUsername = require('./getUserByUsername');
const insertPost = require('./insertPost');
const signupQuery = require('./signupQuery');
const voteQuery = require('./voteQuery');

module.exports = {
  signupQuery, getUserByEmail, getUserByUsername, getPosts, insertPost, voteQuery,

};
