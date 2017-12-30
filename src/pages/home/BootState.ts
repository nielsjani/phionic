
export class BootState extends Phaser.State {

  public static STATE_NAME = "BootState";
  private height: number;
  private width: number;

  init(height: number, width: number): void {
    this.height = height;
    this.width = width;
  }

  create() {
      this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.game.scale.setMinMax(this.game.width/2, this.game.height/2, this.width, this.height);
      this.game.state.start("GameState", false, false);

      // this.addTrapezium();
      // this.addText();
  }

  // private addText() {
  //   let style = {font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"};
  //   this.game.add.text(0, 0, "WDITH " + this.width + " HEIGHT " + this.height, style);
  // }
  //
  //
  // private addTrapezium() {
  //   let poly = new Phaser.Polygon();
  //   poly.setTo([
  //     new Phaser.Point(this.width * 0.1, this.height * 0.1),
  //     new Phaser.Point(this.width * 0.2, this.height * 0.1),
  //     new Phaser.Point(this.width * 0.3, this.height * 0.3),
  //     new Phaser.Point(this.width * 0.05, this.height * 0.3)]);
  //   this.graphics = this.game.add.graphics(0, 0);
  //   this.graphics.beginFill(0xFF33ff);
  //   this.graphics.drawPolygon(poly.points);
  //   this.graphics.endFill();
  // }
}
