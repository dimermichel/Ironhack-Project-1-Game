class Player extends Spritesheet {

  constructor(game, x, y, controllerConfig, type) {
    super(game, x, y)
    this.health = 100
    this.score = 0
    this.jumping = false
    this.x_velocity = 0
    this.y_velocity = 0
    this.controller = controllerConfig
    this.type = type

    if (this.type == Player.LEFT){
      this.facingLeft = true
      this.facingRight = false
    }

    window.addEventListener("keyup", this.controller.keyListener.bind(this.controller))
    window.addEventListener("keydown", this.controller.keyListener.bind(this.controller))
  
  }

  applyPhisics(){
    this.y_velocity += 4// gravity
    this.x += this.x_velocity
    this.y += this.y_velocity
    this.x_velocity *= 0.8// friction
    this.y_velocity *= 0.8// friction

    if (this.y > 336 - this.height - 10) {
      this.jumping = false
      this.y = 336 - this.height - 10
      this.y_velocity = 0
    }
  }
  
  moveAndDraw(player) {
    
    //idle
    if ((!this.controller.kickKey && !this.controller.leftKey && !this.controller.rightKey)) {
      this.drawSprite(this.type === Player.RIGHT ? "./images/sprites-first-player-idle.png" : "./images/sprites-first-player-idle.png", 686, 240, 2, 8)
    }
    
    //running bouth directions same time logic
    if (this.controller.rightKey && this.controller.leftKey && !this.controller.kickKey) {
      if (this.x <= 750 - this.width && this.x >= 10)
      this.drawSprite(this.type === Player.RIGHT ? "./images/sprites-first-player-run.png" : "./images/sprites-first-player-run.png", 886, 245, 2, 8)
    }
    
    //jumping
    if (this.controller.upKey && this.jumping == false) {
      if (this.y > 0){
        this.y_velocity -= 60
        this.jumping = true  
      } 
    }
    
    //running left
    if (this.controller.leftKey && !this.controller.rightKey && !this.controller.kickKey) {
      if (this.x >= 10 && !this.collision(player)) this.x_velocity -= 5;
      else {
        this.x_velocity = 0
        this.x = this.x
      }
      this.drawSprite(this.type === Player.RIGHT ? "./images/sprites-first-player-run.png" : "./images/sprites-first-player-run.png", 886, 245, 2, 8)
      this.facingLeft = true
      this.facingRight = false
    }

    //running right
    if (this.controller.rightKey && !this.controller.leftKey && !this.controller.kickKey) {
      if (this.x <= 750 - this.width && !this.collision(player)) this.x_velocity += 5
      else {
        this.x_velocity = 0
        this.x = this.x
      }
      this.drawSprite(this.type === Player.RIGHT ? "./images/sprites-first-player-run.png" : "./images/sprites-first-player-run.png", 886, 245, 2, 8)
      this.facingLeft = false
      this.facingRight = true
    }

    //kick
    if (this.controller.kickKey) {
      this.drawSprite(this.type === Player.RIGHT ? "./images/sprites-first-player-kick.png" : "./images/sprites-first-player-kick.png", 914, 245, 2, 7)
    }

    this.applyPhisics()
        
  }

  collision(player) {
    if (this.x < player.x + player.width && this.x + this.width > player.x &&
        this.y < player.y + player.height && this.y + this.height > player.y){
        //setTimeout(() => alert("crash"), 5);
        //window.location.reload();
        return true
    } else return false
  }
}

Player.RIGHT = 0
Player.LEFT = 1
