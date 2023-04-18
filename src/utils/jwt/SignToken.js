const { sign } = require('jsonwebtoken');

const { SECRET } = process.env;

const signToken = (payload) => new Promise((resolve, reject) => {
  sign(payload, SECRET, (err, token) => {
    if (err) reject(err);
    resolve(token);
  });
});

module.exports = signToken;
