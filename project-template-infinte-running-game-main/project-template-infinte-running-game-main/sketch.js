var skyImg, sky;
var cloudsImg, cloud,cloudsGroup;
var bird, birdImg;
var gameState = "play"


function preload(){
  skyImg = loadImage("sky.png");
  cloudImg = loadImage("cloud.png");
  birdImg = loadImage("bird.png");

}

function setup() {
  createCanvas(600,600);
  sky = createSprite(300,300);
  sky.addImage("ceu",skyImg);
  sky.velocityX = 1;
  
  cloudsGroup = new Group();
  
  bird = createSprite(200,200,50,50);
  bird.scale = 0.3;
  bird.addImage("passaro", birdImg);
}


function draw() {
  background(255);
 if(sky.x > 400){
      sky.x = 300
    } 
  
  if (gameState === "play") {
    
    if(keyDown("left")){
        bird.y = bird.y - 3;

     
    }
    if(keyDown("right")){
  
          bird.x = bird.y + 3;

      
      
    }

      
    }
  
  bird.velocityY = bird.velocityY + 0.8;
  

     if(cloudsGroup.isTouching(bird)){
      bird.velocityY = 0;
    }
  
}
  
  drawSprites();
  {

  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
  }


    
    
     

   

   
   