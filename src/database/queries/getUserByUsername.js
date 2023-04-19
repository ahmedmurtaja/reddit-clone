const connection = require('../config/connection');

const getUserByUsername = (username) => {
  const sql = {
    text: 'SELECT * FROM USERS WHERE USERNAME = $1',
    values: [username],
  };
  connection.query(sql);
};

module.exports = getUserByUsername;
