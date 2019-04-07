
var circleX;
var circleY;

//this function gets executed only once
function setup() {
  createCanvas(800, 800);

//background
  background(250,250,100);

  circleX = 50;
  circleY = 3*(circleX^2)-2*circleX+5;
}

//this function gets executed again and again forever
function draw() {
//background
  //background(250,250,100);

//rectangle
  rectMode(CENTER);
  fill(0,255,0);
  stroke(0,0,0);
  strokeWeight(4);
  rect(200, 200,200,200,10,10,10,10);

//line
 // line(0, 0, 400, 400);
 // line(400, 0, 0, 400);


//ellipse
  // fill(255,0,0,90);
  // noStroke();
  // ellipse(mouseX,mouseY,50,50);
  // ellipse(circleX++,circleY++,50,50);

  point(mouseX,mouseY);
}

//This function gets executed when mouse is pressed - Event

function mousePressed() {

  background(250,250,100);


}