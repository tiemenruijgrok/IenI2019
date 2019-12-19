function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  noStroke();
  fill('blue');


for (var n = 0;n < 5;n++) 
    rondjes();
    
    translate(100,0);
}

function rondjes() {
    push();
    ellipse(50,225,100)
    pop();
}
