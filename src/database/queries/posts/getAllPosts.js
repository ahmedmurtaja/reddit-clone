const connection = require('../../config/connection');

const getPosts = () => {
  const sql = {
    text: 'SELECT POSTS.ID, POSTS.CONTENT, USERS.USERNAME ,USERS.AVATAR FROM POSTS JOIN USERS ON POSTS.USER_ID = USERS.ID;',
  };
  return connection.query(sql);
};

module.exports = getPosts;
