const connection = require('../../config/connection');

const deleteVote = (userId, postId) => {
  const sql = {
    text: 'DELETE FROM votes WHERE user_id = $1 AND post_id = $2',
    values: [userId, postId],
  };
  return connection.query(sql);
};

module.exports = deleteVote;
