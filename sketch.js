var background, backgroundImg;
var runner1, runner2, runner3, runner4;
var runner1Img, runner2img, runner3Img, runner4Img;

function preload(){
backgroundImg=loadImage("images/th.jpeg");
runner1Img=loadImage("images/runner1.png");
runner2Img=loadImage("images/runner2.png");
runner3Img=loadImage("images/runner1.png");
runner4Img=loadImage("images/runner2.png");
}

function setup() {
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  runner1=createSprite(300,300, 30, 30);
  runner1.addImage("runner1", runner1Img);
  runner2=createSprite(300,150, 30, 30);
  runner2.addImage("runner2", runner2Img);
  runner3=createSprite(300,100, 30, 30);
  runner3.addImage("runner3", runner3Img);
  runner4=createSprite(300,200, 30, 30);
  runner4.addImage("runner4", runner4Img);
  
}

function draw(){
  background(backgroundImg)
  image(backgroundImg,0,-displayHeight*4,displayWidth,displayHeight*5);
 
  drawSprites();
}
