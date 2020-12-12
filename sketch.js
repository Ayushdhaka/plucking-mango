
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground (600,550,1200,10);
	tree =new Tree(1010,380,270,370);
	boy=new Boy(200,540,150,200);
	stone=new Stone(150,450,30,30);
	chain=new Chain(stone.body,{x:100,y:540})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ground.display();
  tree.display();
  boy.display();
  stone.display();
  chain.display();
  drawSprites();
 
}




