import { Pool, RowDataPacket } from 'mysql2/promise';
import IOrder from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrder[]> {
    const result = await this.connection
      .execute<RowDataPacket[]>(`
      SELECT ord.id, ord.userId, JSON_ARRAYAGG(prod.id) as productsIds
      FROM Trybesmith.Orders as ord
      INNER JOIN Trybesmith.Products as prod
      ON ord.id = prod.orderId
      GROUP BY ord.id
      ORDER BY ord.userId`);
    const [rows] = result;
    return rows as IOrder[];
  }
}