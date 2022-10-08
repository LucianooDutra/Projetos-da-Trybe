import ILogin from '../interfaces/login.interface';
import IOrder from '../interfaces/order.interface';
import connection from '../models/connection';
import OrderModel from '../models/OrderModel';

class OrderService {
  constructor(readonly model = new OrderModel(connection)) {}

  public async getAll(): Promise<IOrder[]> {
    const result = await this.model.getAll();
    return result;
  }

  public async create(id: number) {

  }
}

export default OrderService;