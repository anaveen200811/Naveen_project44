const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var block,polygon,polygon_img,slingshot;
var stand1,stand2,ground,blocks,backgroundImg;
var bg = "bg.png";
var score;
var gameState = 0;
var form;
function preload(){
  polygon_img=loadImage("polygon.png");
  getBackgroundImg();
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground(450,390,900,20);
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block16 = new Block(390,155,30,40);
  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  blocks9 = new Block(700,95,30,40);
  form = new Form();

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  slingShot = new Slingshot(this.polygon,{x:100,y:200});
  score = 0;
}
function draw() {
  
  if(backgroundImg)
  background(backgroundImg);
  textSize(20);
  Engine.update(engine); 
  if(gameState === 0) {
    form.display();
  }
  if(gameState === 1){
    form.hide();
    ground.display();
    stand1.display();
    stand2.display();
    strokeWeight(2);
    stroke(15);
    fill("red");
    block1.display();
    block1.score();
    block2.display();
    block2.score();
    block3.display();
    block3.score();
    block4.display();
    block4.score();
    block5.display();
    block5.score();
    block6.display();
    block6.score();
    block7.display();
    block7.score();
    fill("blue");
    block8.display();
    block8.score();
    block9.display();
    block9.score();
    block10.display();
    block10.score();
    block11.display();
    block11.score();
    block12.display();
    block12.score();
    fill("gold");
    block13.display();
    block13.score();
    block14.display();
    block14.score();
    block15.display();
    block15.score();
    fill("orange");
    block16.display();
    block16.score();
    fill("skyblue");
    blocks1.display();
    blocks1.score();
    blocks2.display();
    blocks2.score();
    blocks3.display();
    blocks3.score();
    blocks4.display();
    blocks4.score();
    blocks5.display();
    blocks5.score();
    fill("orange");
    blocks6.display();
    blocks6.score();
    blocks7.display();
    blocks7.score();
    blocks8.display();
    blocks8.score();
    fill("red")
    blocks9.display();
    blocks9.score();
    fill("gold");

    imageMode(CENTER);
    image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
    slingShot.display();
    drawSprites();
    text("score : "+score,700,40);
    text("click space to get chances",300,40)
  }
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed() {
  if(keyCode === 32) {
    slingShot.attach(this.polygon); 
  }
}
async function getBackgroundImg(){ 
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata"); 
  var responseJSON = await response.json(); 
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13); 
  if(hour>=06 && hour<=18){
    bg = "bg.png"; 
  } 
  else
  { 
    bg = "bg2.jpg"; 
  } 
  backgroundImg = loadImage(bg);
}
