
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var mango1,mango2,mango3,mango4,mango5,ground,tree,boyimg;
function preload()
{
	boyimg=loadImage("boy.png");	
}
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	mango1= new Mango(650,300,20);
	mango2= new Mango(700,280,20);
	mango3= new Mango(680,400,20);
	mango4= new Mango(740,350,20);
	mango5= new Mango(760,320,20);
	tree= new Tree(700,400,100,1);
     stone=new Stone(200,200,50);

ground= new Ground(400,600,800,10);                 
hold=new Ground(155,450,0,0);
thrower=new Throw(stone.body,hold.body);
	Engine.run(engine);
}
function draw() {
	
  rectMode(CENTER);
  background(225);                                 
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  ground.display();
  stone.display();
  thrower.display();
 detectcollision(mango1,stone);
 detectcollision(mango2,stone);
 detectcollision(mango3,stone);
 detectcollision(mango4,stone);
 detectcollision(mango5,stone);
  strokeWeight(3);

 image(boyimg,200,520,100,300);
  drawSprites();
}

function mouseDragged(){

	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
thrower.fly();
console.log("messages");
}

  function keyPressed(){
    if(keyCode === 32){
       
        Matter.Body.setPosition(stone.body,{x:200,y:50});
       thrower.attach(stone.body);
       gameState="onSling";
    }
}
function detectcollision(imango,istone){
  mp=imango.body.position;
  sp=istone.body.position;
  var distance= dist(mp.x,mp.y,sp.x,sp.y);
  if(distance<=imango.radius+istone.radius){
    Matter.Body.setStatic(imango.body,false);
  }

}




