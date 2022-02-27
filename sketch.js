
var barco, barcomov;
var mar, marinvisible, imagenmar;
function preload(){
 barcomov= loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

 imagenmar= loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  
  mar= createSprite(0,200,400,400);
  mar.addImage("mar",imagenmar);
  mar.velocityX= -4;
  mar.scale=0.25;

  barco= createSprite(100,220,50,50);
  barco.addAnimation("moving",barcomov);
  barco.scale=0.2;



}

function draw() {
  background("skyblue");

  if (mar.x <0){
    mar.x=width/2;
  }


  drawSprites();
}