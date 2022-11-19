import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/Car';

const invalidID = 'Invalid mongo id';
const carNotFound = 'Car not found';

class Car {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.create(car);
      return this.res.status(201).json(newCar);
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
        return this.res.status(404).json({ message: carNotFound });
      }

      return this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateById() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };
    const { id } = this.req.params;

    try {
      if (!isValidObjectId(id)) {
        return this.res.status(422).json({ message: invalidID });
      }

      const updatedCar = await this.service.updateById(id, car);

      if (!updatedCar) {
        return this.res.status(404).json({ message: carNotFound });
      }

      return this.res.status(200).json(updatedCar);
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

      const getCar = await this.service.getById(id);
      if (!getCar) {
        return this.res.status(404).json({ message: carNotFound });
      }

      await this.service.deleteById(id);

      return this.res.status(204).json({});
    } catch (error) {
      this.next(error);
    }
  }
}
  
export default Car;