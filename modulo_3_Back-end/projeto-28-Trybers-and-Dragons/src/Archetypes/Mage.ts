import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private typeEnergy: EnergyType = 'mana';
  static instances = 0;

  constructor(name:string) {
    super(name);
    Mage.instances += 1;
  }

  get energyType():EnergyType {
    return this.typeEnergy;
  }

  static createdArchetypeInstances():number {
    return this.instances;
  }
}