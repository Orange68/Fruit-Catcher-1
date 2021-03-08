const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World

var apple, banana, basket, basket2, jungle, melon, orange, pineapple, fruitGroup, score;

function preload(){
apple=loadImage("images/apple2.png");
banana=loadImage("images/banana2.png");
melon=loadImage("images/melon2.png");
orange=loadImage("images/orange2.png");
pineapple=loadImage("images/pineapple2.png");
basket=loadImage("images/basket2.png");
basket2=loadImage("images/basket2.png");
jungle=loadImage("images/jungle.jpg");
}

function setup(){
createCanvas(1000,1000);
basket=createSprite(10,400,20,20);
basket2=createSprite(10,600,20,20);
fruitGroup=createGroup();
score=createSprite();
score=0;
}

function draw(){
background(jungle);

if(keyCode("LEFT_ARROW")){
basket.velocityX=-2;
}
if(keyCode("RIGHT_ARROW")){
basket.velocityX=2;
}
if(keyCode("UP_ARROW")){
basket2.velocityX=-2;
}
if(keyCode("DOWN_ARROW")){
basket2.velocityX=2;
}

basket.score=0;
basket2.score=0;



if(basket.isTouching(apple)){
apple.destroy();
score=score+1;
fill("white");
textSize(40);
text("Player1=0",50,50);
}
if(basket.isTouching(banana)){
banana.destroy();
score=score+1;
fill("white");
textSize(40);
text("Player1=0",50,50);
  }
if(basket.isTouching(melon)){
melon.destroy();
score=score+1;
fill("white");
textSize(40);
text("Player1=0",50,50);
}
if(basket.isTouching(orange)){
orange.destroy();
score=score+1;
fill("white");
textSize(40);
text("Player1=0",50,50);
}
if(basket.isTouching(pineapple)){
pineapple.destroy();
score=score+1;
fill("white");
textSize(40);
text("Player1=0",50,50);
}
if(basket2.isTouching(apple)){
apple.destroy();
score=score+1;
fill("white");
textSize(40);
text("Player2=0",50,50);
}
if(basket2.isTouching(banana)){
banana.destroy();
score=score+1;
fill("white");
textSize(40);
text("Player2=0",50,50);
}
if(basket2.isTouching(melon)){
melon.destroy();
score=score+1;
fill("white");
textSize(40);
text("Player2=0",50,50);
}
if(basket2.isTouching(orange)){
orange.destroy();
score=score+1;
fill("white");
textSize(40);
text("Player2=0",50,50);
}
if(basket2.isTouching(pineapple)){
pineapple.destroy();
score=score+1;
fill("white");
textSize(40);
text("Player2=0",50,50);
}

apple.display();
banana.display();
basket.display();
basket2.display();
jungle.display();
melon.display();
orange.display();
pineapple.display();

SpawnApples();
SpawnBananas();
SpawnMelons();
SpawnOranges();
SpawnPineapples();
drawSprites();
}

function SpawnApples(){
if(World.frameCount%60==0){
apple=createSprite(randomNumber(50,950),50);
apple.velocityY=1;
apple.lifetime(1000);
fruitGroup.add(apple);
}

function SpawnBananas(){
  if(World.frameCount%80==0){
  banana=createSprite(randomNumber(50,950),50);
  banana.velocityY=1;
  banana.lifetime(1000);
  fruitGroup.add(banana);
  }
}

function SpawnMelons(){
  if(World.frameCount%100==0){
  melon=createSprite(randomNumber(50,950),50);
  melon.velocityY=1;
  melon.lifetime(1000);
  fruitGroup.add(melon);
  }
}

function SpawnOranges(){
  if(World.frameCount%110==0){
  orange=createSprite(randomNumber(50,950),50);
  orange.velocityY=1;
  orange.lifetime(1000);
  fruitGroup.add(orange);
  }
}

function SpawnPineapples(){
  if(World.frameCount%120==0){
  pineapple=createSprite(randomNumber(50,950),50);
  pineapple.velocityY=1;
  pineapple.lifetime(1000);
  fruitGroup.add(pinapple);
  }
}
}
