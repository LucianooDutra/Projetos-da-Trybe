import { Router } from 'express';
import MotorcycleController from '../Controllers/Motorcycles';

const motorcycleRouter = Router();

const motorcycleID = '/motorcycles/:id';

motorcycleRouter.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

motorcycleRouter.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).getAll(),
);

motorcycleRouter.get(
  motorcycleID,
  (req, res, next) => new MotorcycleController(req, res, next).getById(),
);

motorcycleRouter.put(
  motorcycleID,
  (req, res, next) => new MotorcycleController(req, res, next).updateById(),
);

motorcycleRouter.delete(
  motorcycleID,
  (req, res, next) => new MotorcycleController(req, res, next).deleteById(),
);

export default motorcycleRouter;