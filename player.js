class Player extends Spritesheet {
  
  constructor(game, x, y, spriteWidth, spriteHeight, spriteRows, spriteCols) {
    super(game, x, y, spriteWidth, spriteHeight, spriteRows, spriteCols)
    this.jumping = false
    this.x_velocity = 0
    this.y_velocity = 0
    this.controller = new Controller(87, 68, 65, 16)
    window.addEventListener("keyup", this.controller.keyListener.bind(this.controller)); 
    window.addEventListener("keydown", this.controller.keyListener.bind(this.controller));
  }

  applyPhisics(){
    this.y_velocity += 5;// gravity
    this.x += this.x_velocity;
    this.y += this.y_velocity;
    this.x_velocity *= 0.8;// friction
    this.y_velocity *= 0.8;// friction

    if (this.y > 336 - this.height - 10) {
      this.jumping = false;
      this.y = 336 - this.height - 10;
      this.y_velocity = 0;
    }
  }
  
  move() {
    
    //idle
    if ((!this.controller.kickKey && !this.controller.leftKey && !this.controller.rightKey)) {
      this.game.fighter.drawSprite("./images/sprites-first-player-idle.png", 686, 240, 2, 8)
    }
    
    //running bouth directions
    if (this.controller.rightKey && this.controller.leftKey && !this.controller.kickKey) {
      if (this.x <= 750 - this.width && this.x >= 10)
      this.game.fighter.drawSprite("./images/sprites-first-player-run.png", 886, 245, 2, 8)
    }
    
    if (this.controller.upKey && this.jumping == false) {
      if (this.y > 0){
        this.y_velocity -= 60
        this.jumping = true  
      } 
    }
    
    if (this.controller.leftKey && !this.controller.rightKey && !this.controller.kickKey) { //&& !(this.controller.rightKey)
      if (this.x >= 10) this.x_velocity -= 5;
      this.game.fighter.drawSprite("./images/sprites-first-player-run.png", 886, 245, 2, 8)
      this.left = true
      this.right = false
    }

    if (this.controller.rightKey && !this.controller.leftKey && !this.controller.kickKey) { //&& !(this.controller.leftKey)
      if (this.x <= 750 - this.width) this.x_velocity += 5
      this.game.fighter.drawSprite("./images/sprites-first-player-run.png", 886, 245, 2, 8)
      this.left = false
      this.right = true
    }

    if (this.controller.kickKey) {
      if (this.x <= 750 - this.width && this.x >= 10)
      this.game.fighter.drawSprite("./images/sprites-first-player-kick.png", 914, 245, 2, 7)
    }

    this.applyPhisics()
    
    // case STATE.LEFT:
    //     if (this.x >= 10) {
    //       if(this.controller.keyPressed) this.x_velocity -= 5;
    //       this.applyPhisics()
    //     }
    //     break;
    // case STATE.JUMP:
    //     if (this.y > 0){
    //       if(this.controller.keyPressed && this.jumping == false)
    //       {
    //         this.y_velocity -= 55;
    //         this.jumping = true;
    //       }
    //     this.applyPhisics()
    //     }
    //     break;
    // case STATE.RIGHT:
    //     if (this.x <= 750 - this.width) {
    //       if(this.controller.keyPressed) this.x_velocity += 6;
    //       this.applyPhisics()
    //     }
    //     break;
    // case STATE.DOWN:
    //     if (this.y <= 300 - this.height) 
    //       this.y += 20;
    //     break;
    //}       
  }

  // crashCollision(ele) {
  //     if (
  //         (this.y + 10 < ele.y + ele.height &&
  //             this.x + 15 < ele.x + ele.width &&
  //             this.x + this.width - 15 > ele.x) ||
  //         (ele.y + ele.height > this.y &&
  //             ele.x < this.x + this.width &&
  //             this.x < elem.x + ele.width)
  //     ) {
  //         setTimeout(() => alert("crash"), 5);
  //         window.location.reload();
  //     }
  // }
}