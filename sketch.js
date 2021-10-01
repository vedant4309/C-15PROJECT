var backgroundImage;
var bow, bowImage;
var red_balloon, red_balloonImage; 
var green_balloon, green_balloonImage;
var blue_balloon, blue_balloonImage;
var yellow_balloon, yellow_balloonImage;
var arrowImage;

function preload(){ 
 //load your images here 
    backgroundImage = loadImage ("background0.png");
    bowImage = loadImage ("bow0.png");
    red_balloonImage = loadImage ("red_balloon0.png");
    green_balloonImage = loadImage ("green_balloon0.png");
    blue_balloonImage = loadImage ("blue_balloon0.png");
    yellow_balloonImage = loadImage ("pink_balloon0.png");
    arrowImage = loadImage ("arrow0.png");
  
}

function setup() {
  createCanvas(600, 600);

  //add code here
  background = createSprite (0,0, 600,600);
  background.addImage (backgroundImage);
  background.scale = 2.5;
  
  bow = createSprite (480, 220, 20, 50);
  bow.addImage (bowImage);
  bow.scale = 1;
  
  /*for (var i = 60; i<400; i = i+60){
    red_balloon = createSprite (50, i, 1, 1);
    red_balloon.addImage (red_balloonImage);
    red_balloon.scale = 0.1;
  }
  
  for (var i = 110; i<360; i = i+60){
    green_balloon = createSprite (100, i, 1, 1);
    green_balloon.addImage (green_balloonImage);
    green_balloon.scale = 0.1;
  }
  
  for (var i = 150; i<360; i = i+60){
    blue_balloon = createSprite (150, i, 1, 1);
    blue_balloon.addImage (blue_balloonImage);
    blue_balloon.scale = 0.1;
  }
  
 for (var i = 200; i<280; i = i+60){
    yellow_balloon = createSprite (200, i, 1, 1);
    yellow_balloon.addImage (yellow_balloonImage);
    yellow_balloon.scale = 1;
  }*/

}

function draw() {
  //add code here
   background.velocityX = -3;
  if (background.x<0){
    background.x = background.width/2;
  }
  
  
  bow.y = World.mouseY
  
    if (keyDown("space")) {
    var arrow = createArrow();
    arrow.addImage (arrowImage);
    arrow.y = bow.y;
  }   
  
  var select_balloon = Math.round(random(1,4));
  console.log(select_balloon)
  if (World.frameCount % 80 == 0)
    if(select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  
  drawSprites();
  
}

function createArrow (){
  arrow = createSprite (360, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  return arrow;
}

function redBalloon (){
  var red = createSprite (0, Math.round(random(20,370)), 10,10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150; 
  red.scale = 0.1;
}

function greenBalloon (){
  var green = createSprite (0, Math.round(random(20,370)), 10,10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
}

function blueBalloon (){
  var blue = createSprite (0, Math.round(random(20,370)), 10,10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
}

function pinkBalloon (){
  var pink = createSprite (0, Math.round(random(20,370)), 10,10);
  pink.addImage(yellow_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 0.1;
}
