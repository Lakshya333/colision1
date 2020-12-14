var rectangle1 , rectangle2;


function setup() {
  createCanvas(800,400);
  
  rectangle1 = createSprite(200,200,50,80);
  rectangle2 = createSprite(400,200,80,30);
  
  rectangle1.shapeColor = "red";
  rectangle2.shapeColor = "red";
  
}

function draw() {
  background(255,255,255);  
  rectangle1.x=World.mouseX;
  rectangle1.y=World.mouseY;
  
  if(rectangle1.x-rectangle2.x > rectangle1.width/2 + rectangle1.width/2){
    rectangle1.shapeColor = "green";
    rectangle2.shapeColor = "green";
    
  }
  else{
    rectangle1.shapeColor = "blue";
    rectangle2.shapeColor = "blue";
  }



  drawSprites();
}