import {BootState} from "./BootState";
import {GameState} from "./GameState";
declare var Phaser: any;

export class PhionicGameManager {

  private game: Phaser.Game;
  private width: number;
  private height: number;

  constructor() {
    this.width = Math.max(window.innerWidth, document.documentElement.clientWidth);
    this.height = Math.max(window.innerHeight, document.documentElement.clientHeight);
  }

  start() {
    this.game = new Phaser.Game(this.width, this.height, Phaser.CANVAS, 'phaser-example');
    this.game.state.add(BootState.STATE_NAME, BootState);
    this.game.state.add(GameState.STATE_NAME, GameState);
    this.game.state.start(BootState.STATE_NAME, false, false, this.height, this.width)
  }
}
