import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/Motorcycle';

const invalidID = 'Invalid mongo id';
const motorcycleNotFound = 'Motorcycle not found';
class Motorcycle {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMotorcycle = await this.service.create(motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAll() {
    try {
      const cars = await this.service.getAll();
      return this.res.status(200).json(cars);
    } catch (error) {
      this.next(error);
    }
  }

  public async getById() {
    const { id } = this.req.params;

    try {
      if (!isValidObjectId(id)) {
        return this.res.status(422).json({ message: invalidID });
      }

      const car = await this.service.getById(id);

      if (!car) {
        return this.res.status(404).json({ message: motorcycleNotFound });
      }

      return this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateById() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };
    const { id } = this.req.params;

    try {
      if (!isValidObjectId(id)) {
        return this.res.status(422).json({ message: invalidID });
      }

      const updatedMotorcycle = await this.service.updateById(id, motorcycle);

      if (!updatedMotorcycle) {
        return this.res.status(404).json({ message: motorcycleNotFound });
      }

      return this.res.status(200).json(updatedMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async deleteById() {
    const { id } = this.req.params;

    try {
      if (!isValidObjectId(id)) {
        return this.res.status(422).json({ message: invalidID });
      }

      const getMotorcycle = await this.service.getById(id);
      if (!getMotorcycle) {
        return this.res.status(404).json({ message: motorcycleNotFound });
      }

      await this.service.deleteById(id);

      return this.res.status(204).json({});
    } catch (error) {
      this.next(error);
    }
  }
}
  
export default Motorcycle;