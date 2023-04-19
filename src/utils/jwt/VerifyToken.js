const { verify } = require('jsonwebtoken');

const { SECRET } = process.env;
const verifyToken = (token) => new Promise((resolve, reject) => {
  verify(token, SECRET, (err, decodedToken) => {
    if (err) reject(err);
    resolve(decodedToken);
  });
});
module.exports = verifyToken;
