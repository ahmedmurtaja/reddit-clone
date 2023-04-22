const commentsRouter = require('express').Router();
const checkAuth = require('../middlewares/checkAuth');

const {
  getAllComments,
  newComment,
} = require('../controller');

commentsRouter.get('/:postId', getAllComments);
commentsRouter.post('/new/:postId', checkAuth, newComment);
// commentsRouter.put('/update/:commentId', updateComment);
// commentsRouter.delete('/delete/:commentId', deleteComment);

module.exports = commentsRouter;
