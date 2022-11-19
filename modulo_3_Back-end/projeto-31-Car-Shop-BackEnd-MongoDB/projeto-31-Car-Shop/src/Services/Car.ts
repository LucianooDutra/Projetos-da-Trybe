import CarDomains from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/Car';

class Car {
  private createCarDomain(car: ICar | null): CarDomains | null {
    if (car) {
      return new CarDomains(car);
    }
    return null;
  }

  public async create(car: ICar) {
    const newCarODM = new CarODM();
    const newCar = await newCarODM.create(car);

    return this.createCarDomain(newCar);
  }

  public async getAll() {
    const newCarODM = new CarODM();
    const cars = await newCarODM.getAll();

    const carArray = cars.map((car: ICar) => this.createCarDomain(car));

    return carArray;
  }

  public async getById(id: string) {
    const newCarODM = new CarODM();
    const car = await newCarODM.getById(id);

    return this.createCarDomain(car);
  }

  public async updateById(id: string, car: ICar) {
    const newCarODM = new CarODM();

    const updatedCar = await newCarODM.updateById(id, car);
    return this.createCarDomain(updatedCar);
  }

  public async deleteById(id: string) {
    const newCarODM = new CarODM();

    await newCarODM.deleteById(id);
  }
}

export default Car;