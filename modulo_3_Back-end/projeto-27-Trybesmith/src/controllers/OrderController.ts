import { Request, Response } from 'express';
import OrderService from '../services/OrderService';

class OrderController {
  constructor(private orderService = new OrderService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const result = await this.orderService.getAll();
    res.status(200).json(result);
  };

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const { decoded, productsIds } = user;

    const userResult = await this.orderService.create(decoded.id);

    res.status(201).json({ user });
  };
}

export default OrderController;