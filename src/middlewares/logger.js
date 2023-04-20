/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
const colors = require('colors');

const logger = (req, res, next) => {
  console.log('**********************************Begin Logger**********************************'.blue.bold);
  console.log(`${req.method} ${req.originalUrl}`.inverse.bold);
  console.log('Request Body :'.yellow, req.body);
  console.log('Request Params :'.yellow, req.params);
  console.log('Request Query :'.yellow, req.query);
  console.log('**********************************End Logger************************************'.blue.bold);

  next();
};

module.exports = logger;
