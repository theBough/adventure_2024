function Key(x, y, w, h, img, room,show) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.img = loadImage(img)
  this.room = room 
  this.show = show
  this.aquired = false;
  
  this.display = function () {
    if(this.room == rooms[activeRow][activeColumn] && this.show){
      /*if you dont want key to disappear, remove this.show*/
      this.img.resize(this.w, this.h)
      image(this.img, this.x, this.y)
    }//end if
     if(this.aquired){
       this.x = p.x;
       this.y = p.y;
       this.img.resize(this.w, this.h)
      image(this.img, this.x, this.y)
     }//end if
  }; //end display
}

function keyCollision() {
  

    //check if we hit the left of any wall
    if (p.y <= k.y + k.h && p.y + p.h >= k.y && p.x <= k.x + k.w && p.x >= k.x && k.show && k.room == rooms[activeRow][activeColumn]) { //if you don't want key to disappear, remove && k.show for ALL if statements
     k.aquired = true;
    }

    //check if we hit the right of any wall
    if (p.y <= k.y + k.h && p.y + p.h >= k.y && p.x + p.w >= k.x && p.x <= k.x + k.w && k.show && k.room == rooms[activeRow][activeColumn]) {
      k.aquired = true;
    }


    if (p.x <= k.x + k.w && p.x + p.w >= k.x && p.y <= k.y + k.h && p.y >= k.y && k.show && k.room == rooms[activeRow][activeColumn]) {
      k.aquired = true;
    }

    //check if we hit the top of any wall
    if (p.x <= k.x + k.w && p.x + p.w >= k.x && p.y + p.h >= k.y && p.y <= k.y + k.h && k.show && k.room == rooms[activeRow][activeColumn]) {
      k.aquired = true;
    }

}//end colision
