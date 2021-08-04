var bg,astronaut,sleep,brush,gym,eat,drink,move,backGround;

function preload() {

  bg = loadImage("images/iss.png");
  sleep = loadImage("images/sleep.png");
  brush = loadImage("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym2.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  drink = loadAnimation("images/drink1.png","images/drink2.png");
  move = loadAnimation("images/move.png","images/move1.png");
}

function setup() {
  createCanvas(400, 400);

  backGround = createSprite(200,200,10,10)
  backGround.addImage("background",bg)

  astronaut = createSprite(300,230)
  astronaut.addImage("sleep",sleep)
  astronaut.scale = 0.5


}

function draw() {
  background(220);

  text("UP Arrow = Brushing",10,10)
  text("DOWN Arrow = Gymming",10,20)
  text("RIGHT Arrow = Sleeping",10,30)
  text("LEFT Arrow = Eating",10,40)
  text("M Key = Moving",10,50)

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brush",brush)
    astronaut.changeAnimation("brush",brush)
    astronaut.y = 350
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gym",gym)
    astronaut.changeAnimation("gym",gym)
    astronaut.y = 350
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("sleeping",sleep)
    astronaut.changeAnimation("sleeping",sleep)
    astronaut.y = 350
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eat",eat)
    astronaut.changeAnimation("eat",eat)
    astronaut.y = 350
  }





  drawSprites()
}