let p 
//we are making an array that will hold the walls
let w = []

function setup() {
  createCanvas(400, 400);
  p = new Player(200,200,10,10,"","red")
  room1();
}

function draw() {
  background(220);
  p.display();
  p.update();
  for(i = 0;i<w.length;i++){
    w[i].display();
  }
}
