let pants;
let shoes;
let person;
let personPants;
let personShoes;

let imghuman;
let imgpants;
let imgshoes;
let imgHpants;
let imgHshoes;

let holdingShoes;
let holdingPants;
let pantsOn;
let shoesOn;

function preload(){
imghuman = loadImage('human.png');
imgpants = loadImage('pants.png');
imgshoes = loadImage('shoes.png');
imgHpants = loadImage('humanpants.png');
imgHshoes = loadImage('humanshoes.png');


}

function setup() {
  createCanvas(windowWidth, 400);
  pants = new Bubble((windowWidth-200), 200, 50, 1);
  shoes = new Bubble(400, 400, 100, 2);
  mouse = new Bubble(400, 400, 10, 0);
  person = new Bubble((width/2)-56, 80, 100, 3);
  personPants = new Bubble((width/2)-56, 80, 100, 4);
  personShoes = new Bubble((width/2)-56, 80, 100, 5);
  holdingShoes = false;
  holdingPants = false;
  pantsOn = false;
  shoesOn = false;
  textAlign(CENTER, CENTER);
  fill(255);
}

function draw() {
  background(214, 32, 32);
  //image(imghuman, (width/2)-56, 80, 113, 250);
  mouse.move();
  mouse.x = mouseX;
  mouse.y = mouseY;
  pants.move();
  person.show();
  cursor();


  if (holdingShoes == false){
  shoes.move();
  }
  else {
  shoes.x = mouseX;
  shoes.y = mouseY;
  }
  
  if (holdingPants == false){
  pants.move();
  }
  else {
  pants.x = mouseX;
  pants.y = mouseY;
  }
  
  if (pantsOn == false){
    pants.show();
  }
     
  if (pantsOn == true){
    personPants.show();
  }
  
  if (shoesOn == false){
    shoes.show();
  }
  
  if (shoesOn == true){
    background(102, 196, 35);
    personShoes.show();
    person.show();
    personPants.show();
    textSize(30);
    fill(255);
    text('Hooray!', width/2, 50);
  }
}

function mousePressed(){
  if (mouse.intersects(shoes) && pantsOn == true){
    holdingShoes = true;
  }
  
  if (mouse.intersects(pants)){
    holdingPants = true;
  }
  
   if (pants.intersects(person) && holdingPants == true){
    pantsOn = true;
  }
   if (shoes.intersects(person) && holdingShoes == true){
    shoesOn = true;
  }
  
}

class Bubble {
  constructor(x, y, r, image) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.image = image;
    this.brightness = 0;
    this.NewX = 2;
    this.NewY = 2;
  }


  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return d < this.r + other.r;
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

    if (this.y > height-50){
      this.NewY = -2;
    }
    if (this.y < 0){
      this.NewY = 2;
    }
    if (this.x > width-50){
      this.NewX = -2;
    }
    if (this.x < 0){
      this.NewX = 2;
    }
    this.y = this.y + this.NewY;
    this.x = this.x + this.NewX;
  }

  show() {
    fill(this.brightness, 125);
    if (this.image == 1){
    image(imgpants, this.x, this.y, 100, 150);
    }
    if (this.image == 2){
    image(imgshoes, this.x, this.y, 150, 50);
    }
    if (this.image == 3){
    image(imghuman, this.x, this.y, 113, 250);
    }
    if (this.image == 4){
    image(imgHpants, this.x, this.y, 113, 250);
    }  
    if (this.image == 5){
    image(imgHshoes, this.x, this.y, 113, 250);
    }  
  }
  
  changeImage() {
      image(imgHpants, this.x, this.y, 100, 100);
    }
  
}
