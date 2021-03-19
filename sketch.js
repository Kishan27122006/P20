var car,wall

function setup() {
  createCanvas(800,400);
  car=createSprite(400, 200, 50, 50);
  car.shapeColor="red"
  wall=createSprite(700, 200, 20, 400);
  wall.shapeColor="black"
  car.debug=true
  wall.debug=true
}

function draw() {
  background("yellow");  
  car.x=mouseX
  car.y=mouseY
  
  if(car.x-wall.x<120 && car.x-wall.x>-35){
    car.shapeColor="red"
   
  }
  else
  { car.shapeColor="blue"
   
  }
  drawSprites();
}