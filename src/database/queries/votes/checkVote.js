const connection = require('../../config/connection');

const checkVote = (userId, postId) => connection.query('SELECT * FROM votes WHERE user_id = $1 AND post_id = $2', [userId, postId]);

module.exports = checkVote;
