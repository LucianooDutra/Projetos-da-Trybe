import IMotorcycle from '../Interfaces/IMotorcycle';
import IVehicle from '../Interfaces/IVehicle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;
  private category: 'Street' | 'Custom' | 'Trail';
  private engineCapacity: number;

  constructor(
    OBJ: IMotorcycle,
  ) {
    const vehicle: IVehicle = {
      id: OBJ.id,
      model: OBJ.model,
      year: OBJ.year,
      color: OBJ.color,
      status: OBJ.status,
      buyValue: OBJ.buyValue,
    };
    super(vehicle);
    this.id = OBJ.id;
    this.model = OBJ.model;
    this.year = OBJ.year;
    this.color = OBJ.color;
    this.status = OBJ.status || false;
    this.buyValue = OBJ.buyValue;
    this.category = OBJ.category;
    this.engineCapacity = OBJ.engineCapacity;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  public setModel(model: string) {
    this.model = model;
  }

  public getModel() {
    return this.model;
  }

  public setYear(year: number) {
    this.year = year;
  }

  public getYear() {
    return this.year;
  }

  public setColor(color: string) {
    this.color = color;
  }

  public getColor() {
    return this.color;
  }

  public setStatus(status: boolean) {
    this.status = status;
  }

  public getStatus() {
    return this.status;
  }

  public setBuyValue(buyValue: number) {
    this.buyValue = buyValue;
  }

  public getBuyValue() {
    return this.buyValue;
  }

  public setCategory(category: 'Street' | 'Custom' | 'Trail') {
    this.category = category;
  }

  public getCategory() {
    return this.category;
  }

  public setEngineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }

  public getEngineCapacity() {
    return this.engineCapacity;
  }
}

export default Motorcycle;