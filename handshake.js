let bubble1;
let bubble2;
let NewX = 1;
let img1;
let img2;
let sound;

function preload(){
img1 = loadImage('hand1.png');
img2 = loadImage('hand2.png');
sound = loadSound('yay.mp3');

}

function setup() {
  createCanvas(windowWidth, 400);
  bubble1 = new Bubble((windowWidth-200), 200, 50, 2);
  bubble2 = new Bubble(400, 200, 100, 1);
  noCursor();
  sound.playMode('untilDone');
}

function draw() {
  background(214, 32, 32);

  if (bubble1.intersects(bubble2)) {
    background(102, 196, 35);
    sound.play();
  }

  bubble1.show();
  bubble2.show();
  bubble1.move();
  bubble2.x = mouseX;
  bubble2.y = mouseY;
}

class Bubble {
  constructor(x, y, r, image) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.image = image;
    this.brightness = 0;
  }

  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return d < this.r + other.r;
    // if (d < this.r + other.r) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    if (this.y > 240){
      NewX = -1;
    }
    if (this.y < 10){
      NewX = 1;
    }
    this.y = this.y + NewX;
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);
    if (this.image == 1){
    image(img1, this.x, this.y, 200, 150);
    }
    else{
    image(img2, this.x, this.y, 200, 150);
    }
  }
}
