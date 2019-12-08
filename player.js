class Player extends Spritesheet {

  constructor(game, x, y, controllerConfig, type, healthDisplay, scoreDisplay) {
    super(game, x, y)
    this.health = 100
    this.healthDisplay = healthDisplay
    this.score = 0
    this.scoreDisplay = scoreDisplay
    this.attack = 2
    this.jumping = false
    this.hurt = false
    this.dead = false
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

    healthDisplay.style.width = `${this.health}%`
  }

  applyPhisics(player){
    this.y_velocity += 4// gravity
    this.x += this.x_velocity
    this.y += this.y_velocity
    this.x_velocity *= 0.8// friction
    this.y_velocity *= 0.8// friction
    
    if (this.collision(player)){
      this.x_velocity = 0
    }

    if (this.y > 336 - this.height - 10) {
      this.jumping = false
      this.y = 336 - this.height - 10
      this.y_velocity = 0
    }
  }
  
  moveAndDraw(player) {

    //hurt
    if(this.hurt){
      this.drawSprite(this.type === Player.RIGHT ? "./images/sprites-first-player-hurt.png" : "./images/sprites-second-player-hurt.png", 615, 261, 2, 5)
    }
    
    //idle
    if ((!this.controller.kickKey && !this.controller.leftKey 
      && !this.controller.rightKey && !this.hurt)) {
      this.drawSprite(this.type === Player.RIGHT ? "./images/sprites-first-player-idle.png" : "./images/sprites-second-player-idle.png", 686, 240, 2, 8)
    }
    
    //running bouth directions same time logic
    if (this.controller.rightKey && this.controller.leftKey 
      && !this.controller.kickKey && !this.hurt) {
      if (this.x <= 750 - this.width && this.x >= 10)
      this.drawSprite(this.type === Player.RIGHT ? "./images/sprites-first-player-run.png" : "./images/sprites-second-player-run.png", 886, 245, 2, 8)
    }
    
    //jumping
    if (this.controller.upKey && this.jumping == false && !this.hurt) {
      if (this.y > 0){
        this.y_velocity -= 60
        this.jumping = true  
      } 
    }
    
    //running left
    if (this.controller.leftKey && !this.controller.rightKey 
      && !this.controller.kickKey && !this.hurt) {
      if (this.x >= 10 && !this.collision(player)) this.x_velocity -= 5
      else if (this.collision(player) && this.facingLeft && player.facingLeft) {
        this.x_velocity -= 5
      } else {
        this.x_velocity = 0
        this.x = this.x
      }
      this.drawSprite(this.type === Player.RIGHT ? "./images/sprites-first-player-run.png" : "./images/sprites-second-player-run.png", 886, 245, 2, 8)
      this.facingLeft = true
      this.facingRight = false
    }

    //running right
    if (this.controller.rightKey && !this.controller.leftKey 
      && !this.controller.kickKey && !this.hurt) {
      if (this.x <= 750 - this.width && !this.collision(player)) this.x_velocity += 5
      else if (this.collision(player) && this.facingRight && player.facingRight) {
        this.x_velocity += 5
      } else {
        this.x_velocity = 0
        this.x = this.x
      }
      this.drawSprite(this.type === Player.RIGHT ? "./images/sprites-first-player-run.png" : "./images/sprites-second-player-run.png", 886, 245, 2, 8)
      this.facingLeft = false
      this.facingRight = true
    }

    //kick
    if (this.controller.kickKey && !this.hurt) {
      this.drawSprite(this.type === Player.RIGHT ? "./images/sprites-first-player-kick.png" : "./images/sprites-second-player-kick.png", 914, 245, 2, 7)
      if (this.collision(player) && !player.dead && !player.hurt) {
        this.hit(player)
        setTimeout(()=>{player.hurt = false}, 250)
      }
    }

    this.applyPhisics(player)
        
  }

  collision(player) {
    if (this.x < player.x + player.width && this.x + this.width > player.x &&
        this.y < player.y + player.height && this.y + this.height > player.y){
        //setTimeout(() => alert("crash"), 5);
        //window.location.reload();
        return true
    } else return false
  }

  // when opponent is hit
  hit(player) {
    player.health -= this.attack
    player.healthDisplay.style.width = player.health + "%";
    player.hurt = true

    // low health
    if (player.health > 10 && player.health <= 30) {
      player.healthDisplay.style.background = "#c60"
    }
    // critical health
    if (player.health > 0 && player.health <= 10) {
      player.healthDisplay.style.background = "#a00"
    }
    // dead
    if (player.health <= 0) {
      player.dead = true
      this.incrementScore()
      //deathTime = 1
      // setTimeout(function () {
      //   respawn(player, victimHealth)
      // }, 400)
    }
  }

  // increment winner’s KO count when he defeated opponent
  incrementScore() {
    ++this.score
    this.scoreDisplay.innerHTML = this.score
  }


}

Player.RIGHT = 0
Player.LEFT = 1