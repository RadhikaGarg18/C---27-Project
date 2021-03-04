
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var bob1, bob2, bob3, bob4,bob5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,200,500,40);
	bob1 = new Bob(400,500,100,100);
	bob2 = new Bob(500,500,100,100);
	bob3 = new Bob(600,500,100,100);
	bob4 = new Bob(300,500,400,40);
	bob5 = new Bob(200,500,400,40);
	chain = new Chain(roof.body,bob1.body);
	chain2 = new Chain(roof.body,bob2.body);
	chain3 = new Chain(roof.body,bob3.body);
	chain4 = new Chain(roof.body,bob4.body);
	chain5 = new Chain(roof.body,bob5.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  
  chain.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  drawSprites();

 
}



