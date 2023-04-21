const connection = require('../../config/connection');

const getPost = (postId) => {
  const sql = {
    text: 'SELECT * FROM POSTS WHERE ID =$1',
    values: [postId],
  };
  return connection.query(sql);
};

module.exports = getPost;
