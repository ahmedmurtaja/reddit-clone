const connection = require('../../config/connection');

const countVote = (postId) => {
  const sql = {
    text: 'SELECT COUNT(vote) FROM votes WHERE post_id = $1',
    values: [postId],
  };
  return connection.query(sql);
};

module.exports = countVote;
