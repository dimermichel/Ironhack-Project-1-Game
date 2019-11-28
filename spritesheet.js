class Spritesheet {
    constructor(game, x, y, spriteWidth, spriteHeight, spriteRows, spriteCols, delay) {
        this.game = game
        //x and y coordinates to render the sprite 
        this.x = x
        this.y = y
        //the with and height of our spritesheet
        this.spriteWidth = spriteWidth // current exemple 864
        this.spriteHeight = spriteHeight // current exemple 280
        this.img = new Image()
        //we are having two rows and 8 cols in the current sprite sheet
        this.spriteRows = spriteRows // current exemple 2
        this.spriteCols = spriteCols // current exemple 8
        // //The 0th (first) row is for the right movement
        this.trackRight = 0
        // //1st (second) row for the left movement (counting the index from 0)
        this.trackLeft = 1
        //To get the width of a single sprite we divided the width of sprite with the number of cols because all the sprites are of equal width and height 
        this.width = this.spriteWidth / this.spriteCols
        //Same for the height we divided the height with number of rows 
        this.height = this.spriteHeight / this.spriteRows
        //Each row contains 8 frame and at start we will display the first frame (assuming the index from 0)
        this.curFrame = 0
        //The total frame is 8 
        this.frameCount = this.spriteCols
        //x and y coordinates of the canvas to get the single frame 
        this.srcX = 0
        this.srcY = 0
        this.delay = delay
        // //tracking the movement left and write 
        this.left = false

        // //Assuming that at start the character will move right side 
        this.right = true

        //Speed of the movement 
        //let speed = 15;

    }
    
    drawSprite(fileName) {
        let dsCtx = this.game.ctx
        this.img.src = fileName

        //Updating the frame 
        this.updateFrame()
        
        //Drawing the image 
        dsCtx.drawImage(this.img, this.srcX, this.srcY, this.width, this.height, this.x, this.y, this.width, this.height)
    }

    updateFrame() {
      let dsCtx = this.game.ctx
      //Updating the frame index 
      this.curFrame = ++ this.curFrame % this.frameCount // 8 % 8 = 0

      //Calculating the x coordinate for spritesheet 
      this.srcX = this.curFrame * this.width
      console.log(this)
      //if the right is true 
      if(this.right){
        //calculating y coordinate for spritesheet
        this.srcY = this.trackRight * this.height
      }
      // console.log(this)
      //if left is true 
      if(this.left){
        //calculate srcY 
        this.srcY = this.trackLeft * this.height
      }
      
	}
}