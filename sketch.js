var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,redBox1,redBox2,redBox3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	redBox1=createSprite(width/2,650,200,20);
	redBox1.shapeColor=color("red");

	redBox2=createSprite(width/2-110,610,20,100);
	redBox2.shapeColor=color("red");

	redBox3=createSprite(width/2+110,610,20,100);
	redBox3.shapeColor=color("red");
	
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.09, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 redBox1=Bodies.rectangle(width/2,650,200,20,{isStatic:true})
	World.add(world,redBox1);

	redBox2=Bodies.rectangle(width/2-110,610,20,100,{isStatic:true})
	World.add(world,redBox2);

	redBox3=Bodies.rectangle(width/2+110,610,20,100,{isStatic:true})
	World.add(world,redBox3);

	console.log(ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  Matter.Body.setStatic(packageBody, false);
  }
}



