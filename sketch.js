var hr, mn, sc;

function setup() {
  createCanvas(800,400);
  
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255); 

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360);

  mnAngle = map(mn,0,60,0,360);

  hrAngle = map(hr,0,12,0,360);

  translate(400,200);
  rotate(-90);
  strokeWeight(10);
  
  push();
  stroke("blue");
  fill("blue");
  rotate(hrAngle);
  line(0,0,80,0);
  pop();

  push();
  stroke("red");
  rotate(mnAngle);
  line(0,0,100,0);
  pop();

  push();
  stroke("green");
  rotate(scAngle);
  line(0,0,110,0);
  pop();

  push();
  stroke("green");
  noFill();
  arc(0, 0, 250, 250, HALF_PI, scAngle);
  pop();

  push();
  stroke("red");
  noFill();
  arc(0, 0, 300, 300, HALF_PI, mnAngle);
  pop();

  push();
  stroke("blue");
  noFill();
  arc(0, 0, 350, 350, HALF_PI, hrAngle);
  pop();



  drawSprites();
}