const commentsRouter = require('express').Router();

const {
  getAllComments,
  newComment,
  updateComment,
  deleteComment,
} = require('../controller');
const checkAuth = require('../middlewares/checkAuth');

commentsRouter.get('/:postId', getAllComments);
// commentsRouter.post('/new', checkAuth, newComment);
// commentsRouter.put('/update/:commentId', updateComment);
// commentsRouter.delete('/delete/:commentId', deleteComment);

module.exports = commentsRouter;
