
var snow1, snow2;
function preload(){
  bg = loadImage("snow3.jpg");
  snow = loadImage("snow5.jpg");
}

function setup() {
  createCanvas(1000,600);
  snow1 = createSprite(400, 200, 50, 50);
  snow1.addImage(snow);
  snow1.scale = 0.2;
  snow2 = createSprite(440, 200, 50, 50);
  snow1.addImage(snow);
  snow1.scale = 0.2;

}

function draw() {
  background(bg); 
  snow1.display();
  snow2.display(); 
  drawSprites();
}