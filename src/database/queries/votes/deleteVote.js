const connection = require('../../config/connection');

const deleteVote = (voteId) => {
  const sql = {
    text: 'DELETE FROM votes WHERE id = $1',
    values: [voteId],
  };
  return connection.query(sql);
};

module.exports = deleteVote;
