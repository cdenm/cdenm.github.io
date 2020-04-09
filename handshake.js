let bubble1;
let bubble2;
let NewX = 2;
let img1;
let img2;
//let sound;
let intersecting;
let timer = 3;
let losetimer =3;

function preload(){
img1 = loadImage('hand1.png');
img2 = loadImage('hand2.png');
img3 = loadImage('hand3.png');
//sound = loadSound('yay.mp3');

}

function setup() {
  createCanvas(windowWidth, 400);
  bubble1 = new Bubble((windowWidth-200), 200, 50, 2);
  bubble2 = new Bubble(400, 200, 100, 1);
  noCursor();
  //sound.playMode('untilDone');
  intersecting = false;
  textAlign(CENTER, CENTER);
  fill(255);
}

function draw() {
  background(214, 32, 32);

  if (bubble1.intersects(bubble2)) {
    background(102, 196, 35);
    //sound.play();
    bubble1.changeImage();
    intersecting = true;
    textSize(50);
    fill(255);
    text('Hold!', width/2, height/2);
    cursor();
    startTimer();
  }
  if (intersecting == false){
  bubble1.show();
  bubble2.show();
  bubble1.move();
  bubble2.x = mouseX;
  bubble2.y = mouseY;
  noCursor();
  }
  

}

function mousePressed(){
  if (intersecting == true){
    bubble1.show();
    bubble2.show();
    bubble1.move();
    bubble2.x = mouseX;
    bubble2.y = mouseY;
    intersecting = false;
    timer = 3;
    losetimer = 3;
    background(102, 196, 35);
  }
}

function startTimer(){
  text(timer, width/2, (height/2)-50);
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if (timer == 0) {
    text("Let Go!", width/2, (height/2)+50);
    loseTimer();
  }
}

function loseTimer(){
  if (frameCount % 60 == 0 && losetimer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    losetimer --;
  }
  if (losetimer == 0) {
    background(214, 32, 32);
    text("Too Long!", width/2, (height/2));
  }
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
      NewX = -2;
    }
    if (this.y < 10){
      NewX = 2;
    }
    this.y = this.y + NewX;
  }

  show() {
    fill(this.brightness, 125);
    if (this.image == 1){
    image(img1, this.x, this.y, 200, 150);
    }
    else{
    image(img2, this.x, this.y, 200, 150);
    }
  }
  
  changeImage() {
      image(img3, this.x-50, this.y-20, 250, 250);
    }
  
}
