let x,y;
let step = 1;
let stepSize = 100;
let numSteps = 1;
let state = 0;

function setup() {
    createCanvas(500, 500);
    x = width / 2;
    y - height / 2;
    background(0);
}

function draw() {

    textSize(64);
    textAlign(CENTER,CENTER);
    fill(255)
    text(step, x, y);

switch (state) {
    case 0:
      x += stepSize;
      break;
    case 1:
      y -= stepSize;
      break;
    case 2:
      x -= stepSize;
      break;
    case 3:
      y += stepSize;
      break;
}

step++;
if (step % numSteps == 0) {
  state = (state + 1) % 4;
}

}