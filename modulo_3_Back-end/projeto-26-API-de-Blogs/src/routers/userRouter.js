const express = require('express');
const { userController } = require('../controllers');
const {
  nameValidate,
  emailValidate,
  passwordValidate,
} = require('../middlewares/validateUserMiddleware');
const validateJWT = require('../auth/validateJWT');

const userRouter = express.Router();

userRouter.post('/', nameValidate, emailValidate, passwordValidate, userController.createUser);

userRouter.get('/', validateJWT, userController.getUsers);

userRouter.get('/:id', validateJWT, userController.getUsersById);

userRouter.delete('/me', validateJWT, userController.deleteUserMe);

module.exports = userRouter;