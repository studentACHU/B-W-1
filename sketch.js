var wall;
var bullet;
var speed;
var weight;thickness;




function setup() {

  




  createCanvas(1600,400);  

thickness= random(22,83)
 wall= createSprite(1400, 200, thickness, height/2);

 
  

  speed=random(200,300);

  bullet = createSprite(0, 200, 25, 25);
  bullet.velocityX=speed;
  bullet.shapeColor="white";

  weight = random(32,50);
}

function draw() {
  background("black"); 
  if(wall.x-bullet.x<(bullet.width/2+wall.width/2)){
   
    bullet.velocityX=0;

    var damage = (0.5*weight*speed*speed)/thickness*thickness*thickness;

    if(damage>10){

      wall.shapeColor="red";
    }

    if(damage<10){

      wall.shapeColor="green";
    }

    
  } 
  drawSprites();
}