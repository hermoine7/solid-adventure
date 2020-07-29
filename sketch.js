const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    
}
function setup(){
  
    var canvas = createCanvas(700,700);
    engine = Engine.create();
    world = engine.world;


    
   

    box = new Box(40,660,40,40);
    box2 = new Box(40,600,40,40);
    box3= new Box(40,540,40,40);
    box4 = new Box(40,480,40,40);
    box5 = new Box(1100,320,40,40);

    /*ground2=new Ground (0,0,1400,20);
    ground3=new Ground (0,700,1400,20)
    ground4=new Ground (0,0,20,1400)
    ground5=new Ground (700,0,20,1400)*/

    

    
}

function draw(){
    
background("black");
    
noStroke();
textSize(35)
fill("white")
text("Score  " + score, width-300, 50)
    
Engine.update(engine);
    //strokeWeight(4);
    
box.display();
 box2.display();
box3.display();
box4.display();
box5.display();
    

/*ground2.display();
ground3.display();
ground4.display();
ground5.display();*/
   
}

function keyPressed(){
    if(keyCode === 37){
        box5.velocityX=4;
        box5.velocityY=0;
    }
    if(keyCode==38){
        box5.velocityY=-4;
        box5.velocityX=0;
    }
    if(keyCode==39){
        box5.velocityX=-4;
        box5.velocityY=0;
    }
}

