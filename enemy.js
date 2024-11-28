function Enemy(x, y, w, h, img, col, room,show,type) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  //this.img = loadImage(img)
  this.col = col;
  this.room = room;
  this.type = type;
  this.show = show;
  this.speed = 1;
  this.distance = 100;
  this.traveled = 0;
  this.direction = 1;
  this.damage = 1;

  this.display = function () {
    if(this.show && this.room == rooms[activeRow][activeColumn]){
     fill(this.col);
     rect(this.x, this.y, this.w, this.h);     
    }

  }; //end display

  
  //add to update function if you want more enemy types
  //do 'if(type == "name of enemy type")'
  //       write enemy behaviour
  this.update = function () {
    if(this.room == rooms[activeRow][activeColumn] && this.show){//check if the room is correct and enemy is shown
      if(type == "horizontal"){//if enemy type is horizontal movement
        if(this.traveled < this.distance){//if we have not traveled max distance
        this.x += this.direction*this.speed;//move in direction
        this.traveled += this.speed;//accumulate traveled
        } 
        else if(this.traveled >= this.distance){//if we have traveled max distance
          this.traveled = 0;//reset distance traveled
          this.direction *= -1;//change direction
        } //if we have traveled max distance
      } else if(type == "follow"){ //if follow the player
        let diffX = p.x - this.x;//x difference between player and enemy
        let diffY = p.y - this.y;//y difference
        
        if(diffX>0){
          this.x += this.speed;
          
        } else if(diffX<0){
          this.x -= this.speed;
        }
        
        if(diffY>0){
          this.y += this.speed;
          
        } else if(diffY<0){
          this.y -= this.speed;
        }
      }
      
    }

  }
}//end enemy

//collision with enemy and player
function enemyCollision() {
  

    //check if we hit the left of any wall
    if (p.y <= e.y + e.h && p.y + p.h >= e.y && p.x <= e.x + e.w && p.x >= e.x && e.show && e.room == rooms[activeRow][activeColumn]) { //if you don't want key to disappear, remove && k.show for ALL if statements
     p.health -= e.damage;
    }

    //check if we hit the right of any wall
    if (p.y <= e.y + k.h && p.y + p.h >= e.y && p.x + p.w >= e.x && p.x <= e.x + e.w && e.show && e.room == rooms[activeRow][activeColumn]) {
      p.health -= e.damage;
    }


    if (p.x <= e.x + e.w && p.x + p.w >= e.x && p.y <= e.y + e.h && p.y >= e.y && e.show && e.room == rooms[activeRow][activeColumn]) {
      p.health -= e.damage;
    }

    //check if we hit the top of any wall
    if (p.x <= e.x + e.w && p.x + p.w >= e.x && p.y + p.h >= e.y && p.y <= e.y + e.h && e.show && e.room == rooms[activeRow][activeColumn]) {
      p.health -= e.damage;
    }

}//end colision
