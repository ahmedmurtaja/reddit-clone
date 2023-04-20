const connection = require('../config/connection');

const voteQuery = (postId, userId, vote) => {
  const sql = {
    text: 'insert into votes (post_id, user_id,vote) values ($1, $2 ,$3) returning *',
    values: [postId, userId, vote],
  };
  return connection.query(sql);
};

module.exports = voteQuery;
