function setup() {
    createCanvas(1000, 500);
    background(100);
    background('#93C572');
    strokeWeight(5);
  }
  
  function draw() {
    stroke(500);
    if (mouseIsPressed === true) {
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }
  