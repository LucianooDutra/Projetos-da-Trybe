import dotenv from 'dotenv';
import connection from '../models/connection';
import LoginModel from '../models/LoginModel';
import ILogin from '../interfaces/login.interface';

dotenv.config();

class LoginService {
  constructor(readonly model = new LoginModel(connection)) {}

  public async getUserByName(user: ILogin) {
    const result = await this.model.getUserByName(user);
    return result;
  }
}

export default LoginService;