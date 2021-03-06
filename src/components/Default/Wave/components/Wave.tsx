import Point from './Point';

class Wave {
  color: string;
  points: Point[];
  numberOfPointer: number;
  stageWidth: number;
  stageHeight: number;
  centerX: number;
  centerY: number;
  pointGap: number;

  constructor(color, pointNumber) {
    this.color = color;
    this.points = [];
    this.numberOfPointer = pointNumber;
  }
  resize(stageWidth, stageHeight) {
    this.stageHeight = stageHeight;
    this.stageWidth = stageWidth;

    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 2;
    this.pointGap = this.stageWidth / (this.numberOfPointer - 1);
    this.init();
  }
  init() {
    for (let i = 0; i < this.numberOfPointer; i++) {
      this.points[i] = new Point(i, this.pointGap * i, this.centerY);
    }
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.points[0].x, this.points[0].y);
    let prevX = this.points[0].x;
    let prevY = this.points[0].y;
    for (let i = 0; i < this.numberOfPointer; i++) {
      const cx = (prevX + this.points[i].x) / 2;
      const cy = (prevY + this.points[i].y) / 2;
      ctx.quadraticCurveTo(prevX, prevY, cx, cy);
      if (i != this.numberOfPointer) {
        this.points[i].update();
      }
      prevX = this.points[i].x;
      prevY = this.points[i].y;
    }
    this.drawLine(ctx, prevX, prevY);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
  drawLine(ctx, prevX: number, prevY: number) {
    ctx.lineTo(prevX, prevY);
    ctx.lineTo(this.stageWidth, this.stageHeight);
    ctx.lineTo(0, this.stageHeight);
    ctx.lineTo(this.points[0].x, this.points[0].y);
  }
}

export default Wave;
