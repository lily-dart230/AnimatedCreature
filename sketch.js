let handWave = 0
let Leaf = 0
let armWave = 0
let moon = 0
let speed = 0.5
let moonSpeed = 1

function setup() {
  createCanvas(500,500);
}
function draw() {
  background(46, 63, 92);
  
  //moon
  noStroke();
  fill(218, 221, 227);
  ellipse(400, 50, 50, 50);
  fill(125, 127, 130);
  ellipse(390, 43, 10);
  ellipse(401, 50, 6);
  ellipse(410, 36, 8);
  ellipse(413, 62, 8);
  ellipse(387, 64, 5);
  fill(162, 164, 168);
  ellipse(391, 42, 8);
  ellipse(414, 61, 6);
  fill(46, 63, 92);
  ellipse(moon + 310, 50, 50, 50);
  
  
  //stars
  fill(218, 221, 227);
  ellipse (50, 20, 5);
  ellipse(350, 300, 3);
  ellipse( 375, 200, 2);
  ellipse(75, 350, 3);
  ellipse(25, 270, 2);
  ellipse(100, 200, 4);
  ellipse(470, 100, 3);
  ellipse(460, 400, 2);
  ellipse(10, 170, 2);
  ellipse(450, 280, 4);
  ellipse(290, 240, 3);
  ellipse(300, 160, 2);
  
  
  //feet
  ellipse(270, 430, 50, 20);
  ellipse(140, 430, 50, 20);
  
  
  //shoes
  fill(196, 45, 58);
  stroke(135, 30, 39);
  ellipse(270, 430, 50, 20);
  ellipse(140, 430, 50, 20);
  line(270, 430, 280, 420);
  line(270, 420, 280, 430);
  line(140,430, 130, 420);
  line(140, 420, 130, 430);
  noFill();
  push();
  
  //right thigh
  noStroke();
  fill(60, 120, 25);
  push();
  translate(250, 350);
  rotate(radians(-35));
  ellipse(0,0, 30, 75);
  pop();
  
  //right shin
  fill(60, 120, 25);
  push();
  translate(260, 400);
  rotate(radians(15));
  ellipse(0,0, 25, 65)
  pop();
  
  
  //left thigh
  fill(60, 120, 25);
  push();
  translate(162, 350);
  rotate(radians(35));
  ellipse(0, 0, 30, 75);
  pop();
  
  //left shin
  fill(60, 120, 25);
  push();
  translate(152, 400);
  rotate(radians(-15));
  ellipse(0,0, 25, 65)
  pop();
  
  
  //Knee caps
  fill(34, 64, 35);
  ellipse(145, 375, 20, 30);
  ellipse(267, 375, 20, 30)
  fill(60, 120, 25);
  ellipse(145, 373, 20, 30);
  ellipse(267, 373, 20, 30);
  
  
  //noStroke();
 
  //right arm
  fill(60, 120, 25);
  push();
  translate(260, 220);
  rotate(radians(-15));
  ellipse(0, 0, 25, 100);
  pop();
  
  //left arm
  fill(60, 120, 25);
  push();
  translate(140, 160);
  rotate(radians(-45));
  ellipse(0, handWave, 25, 100);
  pop();
  
  
  //right hand
  stroke(34, 64, 35);
  ellipse(273, 265, 20, 30);
  
 
  //left hand
  fill(60, 120, 25);
  push();
  translate(105, 125);
  rotate(radians(-15));
  ellipse(handWave, handWave, 20, 30);
  pop();

  
  
  //body
  noStroke();
  fill(34, 64, 35);
  ellipse(206.5, 201, 101, 306);
  fill(60, 120, 25);
  ellipse(206.25, 200, 100, 300);
  
  
  //head
  noStroke();
  fill(34, 64, 35);
  ellipse(206.5, 85, 165, 150);
  fill(60, 120, 25);
  ellipse(206.25, 80, 180, 150)

  
  //right eye
  stroke(0);
  strokeWeight(0.75);
  fill(34, 64, 35);
  ellipse(250, 75, 75);
  ellipse(162.5,75, 75)
  fill(235, 241, 250);
  ellipse(162.5,75,75,37.5);
  fill (109, 154, 222);
  ellipse (162.5,75,37.5,37.5);
  fill(0,0,0);
  ellipse(162.5,80,22.5,22.5);
  fill(235, 241, 250);
  ellipse(170, 80, 5, 5);
  ellipse(165, 77.5, 2.5, 2.5);
  
  //left eye
  fill (235,241,250);
  ellipse (250,75,75,37.5);
  fill (109, 154, 222);
  ellipse (250,75,37.5, 37.5);
  fill(0,0,0);
  ellipse(250,80,22.5,22.5);
  fill(235, 241, 250);
  ellipse(257.5, 80, 5, 5);
  ellipse(252.5, 77.5, 2.5, 2.5);
 
  //left lashes
  stroke(0);
  strokeWeight(1);
  line(162.5, 55.75,162.5,45);
  line(167.5, 56, 170, 45.25);
  line(172.5, 56.25, 177.5, 47.5);
  line(177.5, 57, 185, 50);
  line(182.5, 58.5, 190, 54.5);
  line(157.5, 56, 155, 45.75);
  line(152.5, 56.25, 148.5, 46.75);
  line(147.5, 57, 140, 48.75);
  line(140, 59.25, 132.5, 52.5);
  line(132.5, 63.25, 126.25, 58.75);
  
  //right lashes
  line(244.5, 55.75, 240, 45);
  line(237.5, 56.75, 232.5, 48.75);
  line(230, 58, 222.5, 50);
  line(250,55.75,250,45);
  line(255, 56, 257.5, 45.25);
  line(260, 56.25, 265, 47.5);
  line(266.25, 57.5, 272.5, 50);
  line(272.5, 59.25, 280, 52.5);
  line(279.5, 62.5, 286.25, 57.5);
  line(285, 67.5, 293.75, 62.5);

  //mouth
  ellipse(206.25, 147, 15, 9);
  strokeWeight(1);
  line(200, 147, 212, 147);
  
  //nose
  noStroke();
  fill(34, 64, 35);
  triangle(218.75, 125.5, 193.75, 125.5, 206.25, 105.5);
  fill(22, 41, 22);
  ellipse(206.5, 126, 23, 18.75);
  fill(34, 64, 35); 
  ellipse(206.25, 127.5, 25, 18.75);
  fill(0, 0, 0);
  ellipse(201.25, 129.5, 7.5, 6.25);
  ellipse(211.25, 129.5, 7.5, 6.25);
  
  
  //ground
  fill(45, 48, 54);
  stroke(25, 27, 31);
  rect(0, 440, 500,100);
  
  //flower
  stroke(61, 34, 24);
  fill(99, 54, 39);
  quad(350, 440, 390, 440, 400, 400, 340, 400);
  stroke(27, 51, 31);
  line(371, 400, 374, 360);
  line(372, 400, 375, 360);
  line(370, 400, 373, 360);
  line(372, 386, Leaf + 382, 380);
  line(372, 387, Leaf + 382, 381);
  noStroke();
  fill(27, 51, 31);
  ellipse(Leaf + 378, Leaf + 374, 15, 11);
  fill(171, 147, 191);
  ellipse(365, 360, 10); 
  ellipse(372, 353, 10);
  ellipse(379, 360, 10);
  ellipse(372, 368, 10)
  fill(197, 209, 102);
  ellipse(372, 360, 10);
  
  
  
  

  if (Leaf >= 379) {
    speed = -speed
  }
  if (Leaf <= -0.1) {
    speed = -speed
  }
  
  
  moon = moon + moonSpeed;
  if (moon >= 450) {
    moon = moon + moonSpeed;
  }

  
 
  if (handWave<-15) {
    speed = -speed
  }
  if (handWave > 10) {
    speed= -speed
  }
  
  handWave = handWave + speed;
  Leaf = Leaf + speed; 
  


} 