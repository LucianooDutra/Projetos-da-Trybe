const express = require('express');
const { postController } = require('../controllers');
const {
  titleValidate,
  contentValidate,
  categoryIdValidate,
} = require('../middlewares/validatePostMiddleware');
const validateJWT = require('../auth/validateJWT');

const postRouter = express.Router();

postRouter.post('/',
validateJWT,
titleValidate,
contentValidate,
categoryIdValidate,
postController.createPost);

postRouter.get('/search', validateJWT, postController.getPostBySearch);

postRouter.get('/', validateJWT, postController.getPosts);

postRouter.get('/:id', validateJWT, postController.getPostById);

postRouter.put('/:id',
titleValidate,
contentValidate,
validateJWT,
postController.updatePostById);

postRouter.delete('/:id', validateJWT, postController.deletePostById);

module.exports = postRouter;