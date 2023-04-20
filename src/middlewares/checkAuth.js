const CustomError = require('../utils/CustomError');
const { verifyToken } = require('../utils/jwt');

const checkAuth = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new CustomError('Un Authorized', 401);
  verifyToken(token)
    .then((decodedToken) => {
      req.user = decodedToken;
      next();
    }).catch((err) => next(err));
};

module.exports = checkAuth;
