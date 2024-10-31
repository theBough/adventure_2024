function Player(x,y,w,h,img,col){
  this.x = x
  this.y = y
  this.w = w
  this.h = h
  this.img = loadImage(img)
  this.col = col
  
  this.display = function(){
    pop()
    fill(this.col)
    rect(this.x, this.y, this.w, this.h )
    push()
  }//end display
}//end player
