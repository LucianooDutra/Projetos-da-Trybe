import { NextFunction, Request, Response } from 'express';
import ILogin from '../interfaces/login.interface';

function validationLogin(req: Request, res: Response, next: NextFunction) {
  const user:ILogin = req.body;

  if (!user.password || user.password.length === 0) {
    return res.status(400).json({ message: '"password" is required' });
  }

  if (!user.username || user.username.length === 0) {
    return res.status(400).json({ message: '"username" is required' });
  }

  next();
}

export default validationLogin;