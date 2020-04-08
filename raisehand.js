let bubble1;
let bubble2;
let NewX = 1.5;
let img1;
let img2;
let imgChild;
let timer = 3;
let losetimer =3;
let imgteacher;
let imgteacherturn;
let angle;

function preload(){
img1 = loadImage('arm.png');
img2 = loadImage('teacherarm.png');
imgChild = loadImage('child1.png');
imgteacher = loadImage('teacher1.png');
imgteacherturn = loadImage('teacher2.png');

}

function setup() {
  createCanvas(windowWidth, 400);
  bubble1 = new Bubble((windowWidth-200), 200, 50, 2);
  bubble2 = new Bubble(285, (windowHeight/2), 100, 1);
  noCursor();
  textAlign(CENTER, CENTER);
  fill(255);
}

function draw() {
  background(214, 32, 32);
  image(imgChild, 115, 175, 175, 200);
  image(imgteacher, (windowWidth-290), 100, 250, 250);
  textSize(30);
  fill(255);
  text('Raise Here', 330, 80);


  bubble1.show();
  bubble2.show();
  bubble1.move();
  //bubble2.x = mouseX;
  bubble2.y = mouseY;
  noCursor();
  
  if (mouseY < 100) {
    background(102, 196, 35);
    image(imgteacherturn, (windowWidth-404), 100, 364, 250);
    image(imgChild, 115, 175, 175, 200);
    bubble2.show();
    fill(255);
    text('Yes!', width/2, height/2);
  }
  

}

function mousePressed(){
  if (intersecting == true){
    bubble1.show();
    bubble2.show();
    bubble1.move();
    //bubble2.x = mouseX;
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
    if (this.y > 145){
      NewX = -1.5;
    }
    if (this.y < 120){
      NewX = 1.5;
    }
    this.y = this.y + NewX;
  }

  show() {
    fill(this.brightness, 125);
    if (this.image == 1){
    image(img1, this.x, this.y, 49, 150);
    }
    else{
    image(img2, this.x, this.y, 100, 65);
    }
  }
  
  changeImage() {
      image(img3, this.x-50, this.y-20, 250, 250);
    }
  
}
