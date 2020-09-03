class Point {
  x: number = 0;
  y: number;
  fieldY: number;
  speed: number;
  cur: number;
  max: number;
  constructor(index, x, y) {
    this.x = x;
    this.y = y;
    this.fieldY = y;
    this.speed = 0.05;
    this.cur = index;
    this.max = Math.random() * 10;
  }

  update() {
    this.cur += this.speed;
    this.y = this.fieldY + Math.sin(this.cur) * this.max;
  }
}

export default Point;
