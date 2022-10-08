import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import LoginService from '../services/LoginService';
import IUser from '../interfaces/user.interface';

const generateToken = (user: IUser): string => {
  const payload = {
    id: user.id,
    username: user.username,
  };

  const token = jwt.sign(payload, 'secret');

  return token;
};

class LoginController {
  constructor(private loginService = new LoginService()) {}

  public login = async (req: Request, res: Response) => {
    const user = req.body;

    const userResult = await this.loginService.getUserByName(user);

    if (!userResult || userResult.password !== user.password) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }

    const token = generateToken(userResult);

    res.status(200).json({ token });
  };
}

export default LoginController;