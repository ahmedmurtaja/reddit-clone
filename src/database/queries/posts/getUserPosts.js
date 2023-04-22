const connection = require('../../config/connection');

const getUserPostsQuery = (userId) => {
  const sql = {
    text: 'SELECT content FROM posts join users on posts.user_id = users.id WHERE user_id = $1',
    values: [userId],
  };
  return connection.query(sql);
};

module.exports = getUserPostsQuery;
