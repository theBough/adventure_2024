let p ;
//we are making an array that will hold the walls
let w = [];
//these two variables handle where the player is on the grid
let activeRow, activeColumn;
//hold on the rooms
let rooms =[];
let k;
let g
let e;
let alive = true;

function setup() {
  createCanvas(400, 400);
  p = new Player(200,200,10,10,"","red")
  // we are starting in room 0, 0 (is the top left room of the grid)
  //you can change this if you like
  activeRow = 0;
  activeColumn = 0;
  k = new Key(30,30,10,10,"key/adventure.webp",rooms[0][0],true)
  g = new Gate(100,100,50,10,"brown",rooms[0][0],true)
  e = new Enemy(50,50,10,10,"","white",rooms[0][0], true, "follow")
}

function draw() {
  background(220);
  p.display();
  for(i = 0;i<w.length;i++){
    noStroke()
    w[i].display();
  }
  wallCollision()
  screenChange()
  rooms[activeRow][activeColumn].call()
  k.display()
  g.display();
  e.display();
  p.checkLive();
  if(alive){
    p.update();
    e.update();
    keyCollision();
    gateCollision();
    enemyCollision();
  }

}
