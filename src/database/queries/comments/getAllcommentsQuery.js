const connection = require('../../config/connection');

const getAllCommentsQuery = (postId) => {
  const sql = {
    text: 'select posts.id as postId ,comments.content as commentData ,users.username as commenter ,posts.user_id as publisherId  from comments join posts ON posts.id = comments.post_id join users ON users.id = comments.user_id where comments.post_id = $1',
    values: [postId],
  };
  return connection.query(sql);
};

module.exports = getAllCommentsQuery;
