const connection = require('../config/connection');

const insertPost = (content, userId) => {
  const sql = {
    text: ' INSERT INTO POSTS(CONTENT, USER_ID) VALUES ($1,$2) RETURNING * ;',
    values: [content, userId],
  };
  return connection.query(sql);
};
module.exports = insertPost;
