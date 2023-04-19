const { JsonWebTokenError } = require('jsonwebtoken');
const CustomError = require('../../utils/CustomError');

// eslint-disable-next-line no-unused-vars
const serverError = (err, req, res, next) => {
  if (err.isJoi) {
    res.status(400).json(
      {
        success: false,
        data: {
          message: err.details,
          statusCode: 400,
        },
      },
    );
  } else if (err instanceof CustomError) {
    res.status(err.statusCode).json(
      {
        success: false,
        data: {
          message: err.message,
          statusCode: err.statusCode,
        },
      },
    );
  } else if (err instanceof JsonWebTokenError) {
    res.status(401).json(
      {
        success: false,
        data: {
          message: 'Un Authorized',
          statusCode: 401,
        },
      },
    );
  } else {
    res.status(500).json(
      {
        success: false,
        data: {
          message: 'Internal server error',
          error: err.message,
          statusCode: 500,
        },
      },
    );
  }
};

module.exports = serverError;
