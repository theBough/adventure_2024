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

function screenChange(){
  if(p.x < 0){
    //this means the player just touched the left edge of the 
    //canvas
    
    //place the player on the right side
    p.x = width -p.w
  }//end if
  
   if(p.x > width){
    //this means the player just touched the right edge of the 
    //canvas
    
    //place the player on the left side
    p.x = 0
  }//end if
   if(p.y > height){
    p.y = 0
  }//end if
   if(p.y < 0){
    p.y = height - p.h
  }//end if
}//end screenChange
