import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import connection from '../models/connection';
import UserModel from '../models/UserModel';
import IDecoded from '../interfaces/decodedJWT.interface';

// const jwtSecret = process.env.JWT_SECRET;

async function validationJWT(req: Request, res: Response, next: NextFunction) {
  const userModel = new UserModel(connection);

  const { authorization } = req.headers;

  if(!authorization){
    return res.status(401).json({ message: 'Token not found' });
  }

  const decoded = jwt.verify(authorization as string, 'secret') as IDecoded;

  const user = await userModel.getUserById(decoded.id)

  // console.log(user, 'aaaaaaaaaaaaaaaaaaaaaa');

  if(!user || user.username.length === 0){
    return res.status(401).json({ message: 'Invalid token' });
  }

  const newBody = {
    decoded,
    ...req.body,
  }
  req.body = newBody;

  next();
}

export default validationJWT;