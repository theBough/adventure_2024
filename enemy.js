function Enemy(x, y, w, h, img, col) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  //this.img = loadImage(img)
  this.col = col;
  this.speed = 1;
  this.distance = 100;
  this.traveled = 0;
  this.direction = 1;

  this.display = function () {
    fill(this.col);
    rect(this.x, this.y, this.w, this.h);
  }; //end display

  this.update = function () {
    console.log(this.traveled);
    if(this.traveled < this.distance){//if we have not traveled max distance
      this.x += this.direction*this.speed;//move in direction
      this.traveled += this.speed;//accumulate traveled
      } 
    else if(this.traveled >= this.distance){//if we have traveled max distance
      this.traveled = 0;//reset distance traveled
      this.direction *= -1;//change direction
    } //if we have traveled max distance

  }
}//end enemy
