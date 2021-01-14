var HelicopterImg, HelicopterSprite, PackageSprite,PackageImg;
var PackageBody,Ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	HelicopterImg=loadImage("helicopter.png")
	PackageImg=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	PackageSprite=createSprite(width/2, 80, 10,10);
	PackageSprite.addImage(PackageImg)
	PackageSprite.scale=0.2

	HelicopterSprite=createSprite(width/2, 200, 10,10);
	HelicopterSprite.addImage(HelicopterImg)
	HelicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	PackageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, PackageBody);
	

	//Create a Ground
	Ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, Ground);

 	Boxposition=width/2-100
 	BoxY=610;


 	BoxleftSprite=createSprite(BoxPosition, BoxY, 20,100);
 	BoxleftSprite.shapeColor=color(255,0,0);

 	BoxLeftBody = Bodies.rectangle(BoxPosition+20, BoxY, 20,100 , {isStatic:true} );
 	World.add(world, BoxLeftBody);

 	BoxBase=createSprite(BoxPosition+100, BoxY+40, 200,20);
 	BoxBase.shapeColor=color(255,0,0);

 	BoxBottomBody = Bodies.rectangle(BoxPosition+100, BoxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, BoxBottomBody);

 	BoxleftSprite=createSprite(BoxPosition+200 , BoxY, 20,100);
 	BoxleftSprite.shapeColor=color(255,0,0);

 	BoxRightBody = Bodies.rectangle(BoxPosition+200-20 , BoxY, 20,100 , {isStatic:true} );
 	World.add(world, BoxRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  PackageSprite.x= PackageBody.position.x 
  PackageSprite.y= PackageBody.position.y 

  
  drawSprites();
  
  
 
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {

    HelicopterSprite.x=HelicopterSprite.x-20;    
    translation={x:-20,y:0}
    Matter.Body.translate(PackageBody, translation)


  } else if (keyCode === RIGHT_ARROW) {
    HelicopterSprite.x=HelicopterSprite.x+20;
    translation={x:20,y:0}
    Matter.Body.translate(PackageBody, translation)
  }
  else if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(PackageBody,false);
    
  }
}