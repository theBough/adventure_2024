let p 
//we are making an array that will hold the walls
let w = []
//these two variables handle where the player is on the grid
let activeRow, activeColumn;
//hold on the rooms
let rooms =[]


function setup() {
  createCanvas(400, 400);
  p = new Player(200,200,10,10,"","red")
  activeRow = 0;
  activeColumn = 0
  room2();
}

function draw() {
  background(220);
  p.display();
  p.update();
  for(i = 0;i<w.length;i++){
    w[i].display();
  }
  //wallCollision()
  screenChange()
  rooms[activeRow][activeColumn].call()
}
