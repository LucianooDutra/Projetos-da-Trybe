import { Pool } from 'mysql2/promise';
import ILogin from '../interfaces/login.interface';
import IUser from '../interfaces/user.interface';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getUserByName(user: ILogin): Promise<IUser> {
    const { username } = user;
    const result = await this.connection
      .execute('SELECT * FROM Trybesmith.Users WHERE username=?', [username]);
    const [rows] = result;
    const [book] = rows as IUser[];
    return book;
  }
}