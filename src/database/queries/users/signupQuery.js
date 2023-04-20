const connection = require('../../config/connection');

const signupQuery = ({ username, email, password }) => {
  const sql = {
    text: 'INSERT INTO USERS(USERNAME , EMAIL ,PASSWORD) VALUES($1,$2,$3) RETURNING ID,USERNAME, EMAIL ',
    values: [username, email, password],
  };
  return connection.query(sql);
};

module.exports = signupQuery;
