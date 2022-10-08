import { Router } from 'express';
import UserController from '../controllers/UserController';
import {
  validationUserName,
  validationClasse,
  validationLevel,
  validationPassword,
} from '../middlewares/validateUser.middleware';

const router = Router();

const userController = new UserController();

router.post(
  '/',
  validationUserName,
  validationClasse,
  validationLevel,
  validationPassword,
  userController.create,
);

export default router;