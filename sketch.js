var runnerAnimation,pathImage,powerImage,bombImage,coinImage,energydrinkImage
function preload(){
  //pre-load images
  runnerAnimation = loadAnimation("Runner-1.png","Runner-2.png")
  bombImage = loadImage("bomb.png")
  coinImage = loadImage("coin.png")
  pathImage = loadImage("path.png")
  powerImage = loadImage("power.png")
  energyDrinkImage = loadImage("energyDrink.png")
}

function setup(){

  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200)
  path.addImage(pathImage)
  path.scale = 1.5
  path.velocityY = 6

  boy = createSprite(200,200)
  boy.addAnimation("B1",runnerAnimation)
  boy.scale = 0.1
}
function draw() {
  background("blue");
if(path.y > 400){
path.y = height/2
}
boy.x = mouseX


  drawSprites()
}

