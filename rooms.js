
function fillRooms(){
  rooms = [
    [room0, room1, room2],
    [room3, room4, room5],
    [room6, room7, room8],
  ]
}//end Fill Rooms
function room0(){
  w=[]
  w.push(new Wall(150,150,50,10,"yellow"))
}
function room1(){
  w=[]
  w.push(new Wall(150,150,50,10,"blue"))
}
function room2(){
   w=[]
  w.push(new Wall(0,0,20,height-20,"green"))
  w.push(new Wall(40,40,20,height-20,"green"))
  w.push(new Wall(40,40,width,20,"green"))  
}
function room3(){
  w=[]
  w.push(new Wall(150,150,50,10,"red"))
}
function room4(){
  w=[]
  w.push(new Wall(150,150,50,10,"brown"))
}
function room5(){
  w=[]
  w.push(new Wall(150,150,50,10,"pink"))
}
function room6(){
  w=[]
  w.push(new Wall(150,150,50,10,"black"))
}
function room7(){
  w=[]
  w.push(new Wall(150,150,50,10,"violet"))
}
function room8(){
  w=[]
  w.push(new Wall(150,150,50,10,"magenta"))
}
