import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import connection from '../models/connection';
import UserModel from '../models/UserModel';
import IUser from '../interfaces/user.interface';

dotenv.config();

// const jwtSecret = process.env.JWT_SECRET;

const generateToken = (user: IUser): string => {
  const payload = {
    id: user.id,
    username: user.username,
  };

  const token = jwt.sign(payload, 'secret');

  return token;
};

class UserService {
  constructor(readonly model = new UserModel(connection)) {}

  public async create(user: IUser) {
    const userCreated = await this.model.create(user);

    const token = generateToken(userCreated);

    return token;
  }
}

export default UserService;
