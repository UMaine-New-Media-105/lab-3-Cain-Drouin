function setup() {
  createCanvas(400, 400);

  angleMode(DEGREES);
}

function draw() {
  background(100, 220, 95);

  drawAbstract()
 
         
}
function drawAbstract(){
 if (mouseX > 100) {
    translate(100, 150);
 
  } else {fill(90, 10, 45);}
  noStroke();
  rect(10, 10, 40);
  rect(10, 80, 40);
  push()
  noFill();
  stroke(90, 10, 45);
  strokeWeight(10);
  arc(40, 65, 100, 100, 270, 90);
  pop()
}
