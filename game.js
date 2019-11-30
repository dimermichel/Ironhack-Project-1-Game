class Game {

    animation = null
    process = 0 // frame slower

    constructor() {
        this.canvas = undefined
        this.ctx = undefined
        this.fighter = new Player(this, 150, 180)
        this.fighter2 = new Player(this, 800-300, 180)
        this.background = undefined
        this.score = 0
        //this.backgroundImg = new Image();
        this.x = undefined
        this.y = undefined
        this.width = 800
        this.height = 336
    }
    

    init() {
        this.canvas = document.getElementById("canvas")
        this.ctx = this.canvas.getContext("2d")
        // this.fighter.drawPlayer(x,y,sw,sh,sc,sr)
        this.x = 0
        this.y = 0
        this.animation = this.start.bind(this) // calling the start method
        this.animation()
    }
   
    start() {
        // this.drawBackground();
        // setInterval(() => {
         if(this.process++ == 2) { // animation frame slower
              this.clear()
              this.drawMainCharacters()
              this.fighter.move()
              this.process = 0
          }
          requestAnimationFrame(this.animation) //more efficient method
        // }, 60);
    }

    // drawBackground() {
    //     this.backgroundImg.src = "./images/background.gif"
    //     this.ctx.drawImage(
    //         this.backgroundImg,
    //         this.x,
    //         this.y,
    //         this.width,
    //         this.height
    //     )
    // }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    drawMainCharacters() {
        this.fighter.drawSprite("./images/sprites-first-player-idle.png", 686, 240, 2, 8)
        this.fighter2.drawSprite("./images/character.png", 864, 280, 2, 8)
    }
}
