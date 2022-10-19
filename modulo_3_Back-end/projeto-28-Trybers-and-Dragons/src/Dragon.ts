import Monster from './Monster';

export default class Dragon extends Monster {
  public _lifePoints: number;
  
  constructor() {
    super();
    this._lifePoints = 999;
  }
}