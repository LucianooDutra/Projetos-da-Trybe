import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    public player: Fighter,
    public enemies: Fighter[] | SimpleFighter[],
  ) {
    super(player);
  }

  dispute() {
    this.enemies.forEach((enemy) => {
      while (this.player.lifePoints !== -1 && enemy.lifePoints !== -1) {
        enemy.attack(this.player);
        this.player.attack(enemy);
      }
    });
  }

  fight(): number {
    this.dispute();

    return this.player.lifePoints === -1 ? -1 : 1;
  }
}