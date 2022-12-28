const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
console.log(c);

class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };
    this.width = 30;
    this.height = 30;
  }
  draw() {
    c.fillStyle = "pink";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

const player = new Player();
player.draw();
