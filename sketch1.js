var bg, bgImg;
var earth, earthImg;
var isro, isroImg;
var mars, marsImg;
var chand, chandImg;
var chand2, chand2Img;
var chand3, chand3Img;
var chand4, chand4Img;



function preload(){
  bgImg = loadImage("bg1.jpg");
    earthImg = loadImage("earth.png");
    isroImg = loadImage("isro.jpg");
    marsImg = loadImage("mars.png");
    chandImg = loadImage("chand.png");
    chand2Img = loadImage("chand2.png");
    chand3Img = loadImage("chand3.png");
    chand4Img = loadImage("chand4.png");
    
}
function setup() {
     var canvas = createCanvas (1500,600);

     bg = createSprite(600,200,10,10);
     bg.addImage(bgImg);
     bg.scale = 0.5;

     earth = createSprite(560,500,10,10);
     earth.addImage(earthImg);
     earth.scale = 0.04;

     isro = createSprite(1400,300,10,10);
     isro.addImage(isroImg);
     isro.scale = 0.32;

     mars = createSprite(120,120,10,10);
     mars.addImage(marsImg);
     mars.scale = 0.05;

     chand = createSprite(800,450,10,10);
     chand.addImage(chandImg);
     chand.scale = 0.05; 
}
function draw(){
    background("black");

    if(keyDown("UP_ARROW")) {
        chand.velocityX = 0;
        chand.velocityY = -9;
        chand.addImage(chand2Img);
      }
      if(keyDown ("DOWN_ARROW")){
      chand.velocityX =0;
      chand.velocityY =9;
      chand.addImage(chand3Img);
      
      }
      if(keyDown("RIGHT_ARROW")){
        chand.velocityX =9;
        chand.velocityY =0;
        chand.addImage(chand4Img);
      }
      if (keyDown("LEFT_ARROW")){
        chand.velocityX =-9;
        chand.velocityY =0;
        chand.addImage(chandImg);
      }
    
    
      

    rect = createSprite(220,580,400,20);
    rect = createSprite(560,580,200,20);
    rect = createSprite(650,320,20,200);
    rect = createSprite(650,540,20,70);
    rect = createSprite(30,470,20,200);
    rect = createSprite(30,170,20,270);
    rect = createSprite(650,100,20,150);
    rect = createSprite(180,45,300,20)
    rect = createSprite(520,35,250,20);
    rect = createSprite(450,500,100,20);
    rect = createSprite(410,400,20,200);
    rect = createSprite(450,500,100,20);
    rect = createSprite(440,310,50,20);
    rect = createSprite(455,280,20,50);
    rect = createSprite(370,265,150,20);
    rect = createSprite(450,500,100,20);
    rect = createSprite(600,270,20,250);
    rect = createSprite(500,155,200,20);
    rect = createSprite(400,160,20,30);
    rect = createSprite(305,375,20,200);
    rect = createSprite(250,465,100,20);
    rect = createSprite(310,180,200,20);
    rect = createSprite(200,260,20,180);
    rect = createSprite(100,465,90,20);
    rect = createSprite(65,370,20,200);
    rect = createSprite(65,200,20,50);
    rect = createSprite(180,340,40,20);
    rect = createSprite(170,255,20,150);
    rect = createSprite(230,530,250,20);
    rect = createSprite(300,120,150,20);
    rect = createSprite(490,90,150,20);



    
    

    drawSprites();
    fill("white");
    textSize(30);
    text("Enter The",700,300);
    text("Space World",750,350);
}

