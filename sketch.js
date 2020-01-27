var bg, bgImg;
var b1, b2, b3, b4, b5, b6, b7, b8;
var ground, groundImg;
var moon, moonImg;
var mission, missionImg;
var target, targetImg;
var ufo, ufoImg;
var fire, fireImg;
var invisible, invisible2;
var comet, cometImg;
var comet2, comet2Img;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score;

function preload(){
  bgImg = loadImage("bg8.jpg");
  //groundImg = loadImage("ground2.jpg");
  moonImg = loadImage("moon.png");
  starImg = loadImage("star.png");
  b1Img = loadImage("Build 1.png");
  b2Img = loadImage("Build 5.png");
  b3Img = loadImage("Build 4.png");
  b4Img = loadImage("Build 1.png");
  b5Img = loadImage("Build 4.png");
  b6Img = loadImage("Build 5.png");
  b7Img = loadImage("Build 4.png");
  b8Img = loadImage("Build 5.png");
  missionImg = loadImage("tank2.png");
  targetImg = loadImage("t1.png");
  ufoImg = loadImage("mission.png");
  fireImg = loadImage("Fire 2.png");
  cometImg = loadImage("comet 3.png");  
  comet2Img = loadImage("comet 3.png");

 
  
}
function setup() {
 var canvas = createCanvas (1500,600);

    bg = createSprite(600,20,10,10);
    bg.addImage(bgImg);
    bg.scale = 2.7;   

   // ground = createSprite(750,550,1500,10);
    //ground.addImage(groundImg)
    
    moon = createSprite(1300,80);
    moon.addImage(moonImg);
    moon.scale = 0.06;
    

    b1 = createSprite(100,550,10,10);
    b1.addImage(b1Img);
    b1.scale = 0.3;

    b2 = createSprite(280,550,10,10);
    b2.addImage(b2Img);
    b2.scale = 0.2;

    b3 = createSprite(420,550,10,10);
    b3.addImage(b3Img);
    b3.scale = 0.5;

    b4 = createSprite(1100,550,10,10);
    b4.addImage(b4Img);
    b4.scale = 0.3;

    b5 = createSprite(950,550,10,10);
    b5.addImage(b5Img);
    b5.scale = 0.5;

    b6 = createSprite(820,550,10,10);
    b6.addImage(b6Img);
    b6.scale = 0.2;

    b7 = createSprite(1250,550,10,10);
    b7.addImage(b7Img);
    b7.scale = 0.5;

    b8 = createSprite(1390,550,10,10);
    b8.addImage(b8Img);
    b8.scale = 0.2;

    mission = createSprite(600,570,10,10);
    mission.addImage(missionImg);
    mission.scale = 0.08;

    ufo = createSprite(700,100,10,10);
    ufo.addImage(ufoImg);
    ufo.scale = 0.2;

    invisible = createSprite(20,530,4,100);
    invisible.visible = false;

    invisible2= createSprite(1480,530,10,100);
    invisible2.visible = false;
    
    comet = createSprite(200, 0);
    comet.addImage(cometImg);
    comet.scale = 0.4;
    comet.velocityY = 2.5;

    comet2 = createSprite(350, 0);
    comet2.addImage(comet2Img);
    comet2.scale = 0.4;
    comet2.velocityY = 1.0;
  
    targetGroup = createGroup();

    score = 0;
    
} 


function draw() {
  background("blue");
 
 
  
if (gameState===PLAY){
  if(keyDown("RIGHT_ARROW")){
    mission.velocityX =6;
    mission.velocityY =0;
  }
  if (keyDown("LEFT_ARROW")){
    mission.velocityX =-6;
    mission.velocityY =0;
  }

  if (keyDown("space")) {
    createSatellite(mission);
}


if (mission.isTouching(invisible)){
  mission.x = 600;
}

if (mission.isTouching(invisible2)){
  mission.x = 600;
}

if (targetGroup.isTouching(comet)) {
  if (frameCount % 10 === 0) {
     comet.destroy();
      comet = createSprite(Math.round(random(20, 1450), Math.round(random(-400, 0))));
      comet.addImage(cometImg);
      comet.scale = 0.4;
      comet.velocityY = 2.5;
      score = score + 500;
      
  }

}

else if (targetGroup.isTouching(comet2)) {
  if (frameCount % 10 === 0) {
      comet2.destroy();
      comet2 = createSprite(Math.round(random(100, 1300), Math.round(random(-400, 0))));
      comet2.addImage(comet2Img);
      comet2.scale = 0.4;
      comet2.velocityY = 1.0;
      score = score + 500;
      
  }
 


}
if (comet.y > 530) {
  comet.x = Math.round(random(20, 1450));
  comet.y = 0;
}
else if (comet2.y > 530) {
  comet2.x = Math.round(random(100, 1300));
  comet2.y = 0;
} 

if (comet.isTouching(b1)){
  b1.addImage(fireImg);
   
}
if (comet.isTouching(b2)){
  b2.addImage(fireImg); 
}
if (comet.isTouching(b3)){
  b3.addImage(fireImg); 
}
if (comet.isTouching(b4)){
  b4.addImage(fireImg); 
}
if (comet.isTouching(b5)){
  b5.addImage(fireImg); 
}
if (comet.isTouching(b6)){
  b6.addImage(fireImg); 
}
if (comet.isTouching(b7)){
  b7.addImage(fireImg); 
}
if (comet.isTouching(b8)){
  b8.addImage(fireImg); 
}

}
else if(gameState===END) {

  comet.destroy();
  targetGroup.setVelocityXEach(0);

}
drawSprites();
fill("white");
textSize(30);
text("HIGH SCORE: 5000",900,50);

fill("white");
textSize(30);
text("Score: " + score, 200, 50);
  
}





     

  

function createSatellite() {
  var satellite = createSprite(100, 100, 5, 10);
  satellite.addImage(targetImg);
  satellite.y = 360;
  satellite.scale = 0.08;
  satellite.x = mission.x;
  satellite.velocityY = -5;
  satellite.lifetime = 1000;
  targetGroup.add(satellite);
}

