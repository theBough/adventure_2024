function Gate(x,y,w,h,col,room, show){
  this.x = x
  this.y = y
  this.w = w
  this.h = h
  this.col = col
  this.room = room;
  this.show = true;
  
  this.display = function(){
    if(rooms[activeRow][activeColumn] == this.room  && this.show){
      fill(this.col)
      rect(this.x, this.y, this.w, this.h)
    }
    
  }//end display
}//end Gate
function gateCollision() {

    //check if we hit the left of any wall
    if (p.y <= g.y + g.h && p.y + p.h >= g.y && p.x <= g.x + g.w && p.x >= g.x) {
      if (k.aquired){//if player has key
        g.show = false;//get rid of gate
      } else {//if no key
        p.x += 5//act like a wall
      }
    }

    //check if we hit the right of any wall
    if (p.y <= g.y + g.h && p.y + p.h >= g.y && p.x + p.w >= g.x && p.x <= g.x + g.w) {
      if (k.aquired){//if player has key
        g.show = false;//get rid of gate
      } else {//if no key
        p.x -= 5
      }
    }


    if (p.x <= g.x + g.w && p.x + p.w >= g.x && p.y <= g.y + g.h && p.y >= g.y) {
      if (k.aquired){//if player has key
        g.show = false;//get rid of gate
      } else {//if no key      
        p.y += 5;
      }
    }

    //check if we hit the top of any wall
    if (p.x <= g.x + g.w && p.x + p.w >= g.x && p.y + p.h >= g.y && p.y <= g.y + g.h) {
      if (k.aquired){//if player has key
        g.show = false;//get rid of gate
      } else {//if no key      
        p.y -= 5;
      }
    }


}//end colision
