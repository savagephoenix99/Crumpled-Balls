const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1, ballSprite
var ground
var left, bottom, right;
var bx, by;
var dustbin1
var dustbinImg
var dustBinS

function preload()
{
	dustbinImg=loadImage("dustbingreen.png")
}

function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(1200, 600);

	ball1 = new Ball(50, 550, 60, 60)

	ground = new Ground(600, 580, 1200, 10)
	
	left=createSprite(800, 520, 20, 100);
	left.shapeColor="red"
	left.visible=false

	right=createSprite(1000, 520, 20, 100)
	right.shapeColor="red"
	right.visible=false;

	bottom=createSprite(900, 560, 200, 20)
	bottom.shapeColor="red"
	bottom.visible=false

	dustbin1 = new Dustbin(800, 520, 1000, 520, bottom.x, bottom.y);
	dustBinS = createSprite(900, 520, 10, 10);
	dustBinS.addImage(dustbinImg)	
	dustBinS.scale=0.5
	


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lime");

  if(keyDown("up")){	
  Matter.Body.applyForce(ball1.body, ball1.body.position, {x:55,y:-65}, )

  }
  ball1.display();
  ground.display();
  //dustbin1.display();
  
  console.log(mouseX)
  console.log(mouseY)

  drawSprites();

}



