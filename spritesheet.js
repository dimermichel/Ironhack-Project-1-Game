class Spritesheet {
  constructor(game, x, y) {
    this.game = game
    //x and y coordinates to render the sprite 
    this.x = x
    this.y = y
    // creating the img element to receive the sprite
    this.img = new Image()
    //The 1st (0) row is for the right movement
    this.trackRight = 0
    //The 2nd (1) row for the left movement (counting the index from 0)
    this.trackLeft = 1
    //Each row contains ...X frames and at start we will display the first frame (assuming the index from 0)
    this.curFrame = 0
    //tracking the movement left 
    this.facingLeft = false
    //Assuming that at start the character will move right side 
    this.facingRight = true
  }
  
  drawSprite(fileName, spriteWidth, spriteHeight, spriteRows, spriteCols) {
    
    //x and y coordinates of the canvas to get the single frame 
    this.srcX = 0
    this.srcY = 0
    //the width and height of our spritesheet
    this.spriteWidth = spriteWidth 
    this.spriteHeight = spriteHeight 
    
    //we have two rows and ...X cols in the current sprite sheet
    this.spriteRows = spriteRows 
    this.spriteCols = spriteCols 

    //To get the width of a single sprite we divided the width of sprite with the number of cols. Because all the sprites are of equal width and height 
    this.width = this.spriteWidth / this.spriteCols
    //Same for the height we divided the height with number of rows 
    this.height = this.spriteHeight / this.spriteRows
    //The total frames
    this.frameCount = this.spriteCols

    let dsCtx = this.game.ctx
    this.img.src = fileName

    //Updating the frame 
    this.updateFrame()
    
    //Drawing the image 
    dsCtx.drawImage(this.img, this.srcX, this.srcY, this.width, this.height, this.x, this.y, this.width, this.height)
  }

  updateFrame() {
    
    //if the charcher is facing right
    if (this.facingRight) {
      //Updating the frame index 
      this.curFrame = ++ this.curFrame % this.frameCount // 1 % 8 = 1 -- 2 % 8 = 2 -- 8 % 8 = 0
      //Calculating the x coordinate for spritesheet 
      this.srcX = this.curFrame * this.width
      //calculating y coordinate for spritesheet
      this.srcY = this.trackRight * this.height
    }
    //if the charcher is facing left
    if (this.facingLeft) {
      //Updating the frame index in the oposite way
      this.curFrame --
       if (this.curFrame < 0) this.curFrame = this.frameCount - 1
      //Calculating the x coordinate for spritesheet 
      this.srcX = this.curFrame * this.width
      //calculate srcY 
      this.srcY = this.trackLeft * this.height
    } 
	}
}