import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private typeEnergy: EnergyType = 'stamina';
  static instances = 0;

  constructor(name:string) {
    super(name);
    Ranger.instances += 1;
  }

  get energyType():EnergyType {
    return this.typeEnergy;
  }

  static createdArchetypeInstances():number {
    return this.instances;
  }
}