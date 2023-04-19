const connection = require('../config/connection');

const getUserByEmail = (email) => {
  const sql = {
    text: 'SELECT * FORM USERS WHERE EMAIL = $1',
    values: [email],
  };
  connection.query(sql);
};

module.exports = getUserByEmail;
