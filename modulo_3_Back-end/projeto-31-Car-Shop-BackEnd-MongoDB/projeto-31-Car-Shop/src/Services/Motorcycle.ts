import MotorcycleDomains from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/Motorcycle';

class Motorcycle {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): MotorcycleDomains | null {
    if (motorcycle) {
      return new MotorcycleDomains(motorcycle);
    }
    return null;
  }

  public async create(motorcycle: IMotorcycle) {
    const newMotorcycleODM = new MotorcycleODM();
    const newMotorcycle = await newMotorcycleODM.create(motorcycle);

    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async getAll() {
    const newMotorcycleODM = new MotorcycleODM();
    const motorcycles = await newMotorcycleODM.getAll();

    const motorArray = motorcycles.map((moto: IMotorcycle) => this.createMotorcycleDomain(moto));

    return motorArray;
  }

  public async getById(id: string) {
    const newMotorcycleODM = new MotorcycleODM();
    const motorcycle = await newMotorcycleODM.getById(id);

    return this.createMotorcycleDomain(motorcycle);
  }

  public async updateById(id: string, moto: IMotorcycle) {
    const newMotorcycleODM = new MotorcycleODM();

    const updatedMotorcycle = await newMotorcycleODM.updateById(id, moto);
    return this.createMotorcycleDomain(updatedMotorcycle);
  }

  public async deleteById(id: string) {
    const newMotorcycleODM = new MotorcycleODM();

    await newMotorcycleODM.deleteById(id);
  }
}

export default Motorcycle;