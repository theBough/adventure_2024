function Player(x,y,w,h,img,col){
  this.x = x
  this.y = y
  this.w = w
  this.h = h
  //this.img = loadImage(img)
  this.col = col
  this.speed = 5
  
  this.display = function(){
    fill(this.col)
    rect(this.x, this.y, this.w, this.h)
  }//end display
  this.update = function(){
    if(keyIsDown(37)){
      p.x -= this.speed;
    }
     if(keyIsDown(39)){
      p.x += this.speed;
    }
     if(keyIsDown(38)){
      p.y -= this.speed;
    }
    if(keyIsDown(40)){
      p.y += this.speed;
    }
  }
}//end player
