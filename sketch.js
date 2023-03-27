const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var top_wall;
var right;
var up1, up2
var ball;
var btn1, btn2;

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;
  
  btn1 = createImg("right.png");
  btn1.position(220,30)
  btn1.size(50,50)
  btn1.mouseClicked(hforce)

  btn2 = createImg("up.png");
  btn2.position(20,30)
  btn2.size(50,50)
  btn2.mouseClicked(vforce)

  ground =new Ground(200,590,400,20);
  left = new Ground(10,400,20,400);
  top_wall = new Ground(500,590,400,20);
  right = new Ground(800,590,400,20);
  up1 = new Ground(700,550,20,100);
  up2 = new Ground(600,550,20,100);
  var ball_options = {
    restitution:0.95
  }

  ball = Bodies.circle(200,100,20,ball_options);
World.add(world,ball)
   rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);

  ellipse(ball.position.x,ball.position.y,20)
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  up1.show();
  up2.show();
  Engine.update(engine);
}

function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}
function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}