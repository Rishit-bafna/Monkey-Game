
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score,BG,backgroundImage;
var ground,GO,GOI;
var obstacleG,bananaG;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  GOI=loadImage("Game over.png")
}




function setup() {
  score=0;
  bananaG=createGroup();
   obstacleG=createGroup();
  
  ground=createSprite(200,355,400,5);
 // ground.visible=false;
  
  
  monkey=createSprite(50,295,1,1);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.10;
  monkey.setCollider("circle",0,0,270);
  monkey.debug=false;
  
 
}


function draw() {    
createCanvas(400,400);
 
 background("lightblue");
  
  textSize(18);
  text("Survival Time:"+score,130,105);
  if(monkey.isTouching(bananaG)){
    score=score+2;
    bananaG.destroyEach();
  }
  
 if(monkey.isTouching(obstacleG)){
   // obstacleG.lifeTime(-1);
    //bananaG.lifeTime(-1);
    score=score-5;     
    obstacleG.destroyEach();
 } 
  
  if(score<0){
     GO=createSprite(200,200,1,1);
     GO.addImage(GOI);
     GO.scale=0.6;
     bananaG.destroyEach();
     obstacleG.destroyEach();
     }
  

  if(keyDown("space")&& monkey.y >= 240){
    monkey.velocityY=-12;
  } 
  
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
  bananas();
  obstacles();
  drawSprites(); 
 
}
function obstacles(){
  if(frameCount%90===0){
  var obstacle=createSprite(400,315,1,1);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX=-6;
  obstacle.scale=0.2;
    
    
     obstacleG.lifetime=100; 
    obstacleG.add(obstacle);
    obstacle.setCollider("circle",0,0,200)
    obstacle.debug=false;
  }
  }


function bananas(){
  if(frameCount%81===0){
  var banana=createSprite(400,200,1,1);
  banana.addImage(bananaImage);
  banana.y=Math.round(random(200,250));
  banana.velocityX=-6;
  banana.scale=0.10;
    
    
     bananaG.lifetime=100; 
     bananaG.add(banana);
    }
  }



