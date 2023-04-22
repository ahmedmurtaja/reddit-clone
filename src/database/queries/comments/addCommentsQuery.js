const connection = require('../../config/connection');

const addCommentsQuery = (comment, userId, postId) => {
  const sql = {
    text: 'insert into comments (content, user_id, post_id) values ($1, $2, $3) returning *',
    values: [comment, userId, postId],
  };
  return connection.query(sql);
};

module.exports = addCommentsQuery;
