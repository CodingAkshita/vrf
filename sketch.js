const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var divisions = [];
var plinkos = [];
var particles = [];

var divisionHeight = 300;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(600,height,1200,20);
  ground2 = new Ground(480,280,20,1200);
  ground3 = new Ground(100,2,1200,20);
  ground4 = new Ground(2,280,20,1200);
  ground = new Ground(240,785,461,15);
  
}

function draw() {
  background(0); 
  Engine.update(engine);

  fill("brown");
  ground1.display();
  fill("brown");
  ground2.display();
  fill("brown");
  ground3.display();
  fill("brown");
  ground4.display();

  fill("white");
  ground.display();
  
 for(var k = 0; k<=width;k = k+80){
  divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
}

for(var j = 40; j<=width; j = j+50){
  plinkos.push(new Plinko(j, 75));
}

for(var j = 15; j<=width-10; j = j+50){
  plinkos.push(new Plinko(j, 175));
}

if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10, width/2+10),10,10));
}





for(var j = 0; j < particles.length; j++)
{
  particles[j].display()
}

for(var k = 0; k < divisions.length; k++)
{
  divisions[k].display()
}


drawSprites();
}