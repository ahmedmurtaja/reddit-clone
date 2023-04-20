const getPosts = require('./getAllPosts');
const getUserByEmail = require('./getUserByEmail');
const getUserByUsername = require('./getUserByUsername');
const signupQuery = require('./signupQuery');

module.exports = {
  signupQuery, getUserByEmail, getUserByUsername, getPosts,
};
