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
    if(this.room == rooms[activeRow][activeColumn]){
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
