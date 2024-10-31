let p 

function setup() {
  createCanvas(400, 400);
  p = new Player(200,200,50,50,"","red")
}

function draw() {
  background(220);
  p.display();
  p.update()
}
