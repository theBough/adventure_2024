function Enemy(x, y, w, h, img, col) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  //this.img = loadImage(img)
  this.col = col;
  this.speed = 3;
  this.distance = 100;
  this.traveled = 0;
  this.direction = 1;

  this.display = function () {
    fill(this.col);
    rect(this.x, this.y, this.w, this.h);
  }; //end display

  this.update = function () {
    if(this.traveled < 100){//if it has not traveled max distance
      this.x += this.direction*this.speed;//move in direction
      this.traveled += this.speed;//accumulate traveled
      } 
    else if(this.traveled >= 100){ //if we have traveled max distance
      this.traveled = 0;
      this.direction = -1;
    }
    };
  }//end enemy
