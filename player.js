function Player(x,y,w,h,img,col){
  this.x = x
  this.y = y
  this.w = w
  this.h = h
  //this.img = loadImage(img)
  this.col = col
  
  this.display = function(){
   
    fill(this.col)
    rect(this.x, this.y, this.w, this.h)
    
  }//end display
  this.update = function(){
    if(keyIsDown(37)){
      p.x -= 5;
    }
  }
}//end player
