var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "cyan";

  movingRect = createSprite(600, 300, 80, 30);
  movingRect.shapeColor = "cyan";
}

function draw() {
  background("black");  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log(movingRect.x - fixedRect.x);

  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 
   && movingRect.y - fixedRect.y <= movingRect.height/2+fixedRect.height/2
   && fixedRect.y - movingRect.y <= movingRect.height/2+ fixedRect.height/2 ){
    fixedRect.shapeColor = "orange";
    movingRect.shapeColor = "orange";
  }
  else {
    fixedRect.shapeColor = "cyan";
    movingRect.shapeColor = "cyan";
  }

  drawSprites();
}