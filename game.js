class Game {

    constructor() {
        this.animation = null
        this.process = 0 // frame slower
        this.canvas = document.getElementById("canvas")
        this.ctx = this.canvas.getContext("2d")
        this.controller1 = new Controller(87, 68, 65, 32)
        this.controller2 = new Controller(38, 39, 37, 186)
        this.healthP1Display = document.getElementById('p1-health')
        this.healthP2Display = document.getElementById('p2-health')
        this.player1ScoreDisplay = document.getElementById('p1-kills')
        this.player2ScoreDisplay = document.getElementById('p2-kills')
        this.player1 = new Player(this, 150, 180, this.controller1, Player.RIGHT, this.healthP1Display, this.player1ScoreDisplay)
        this.player2 = new Player(this, 550, 180, this.controller2, Player.LEFT, this.healthP2Display, this.player2ScoreDisplay)
        this.x = 0
        this.y = 0
        this.width = 800
        this.height = 336
        this.isFinished = false
        // load sounds
        this.sound = new Array()
    }
    

    init() {
        this.sound[0] = new Audio('./sounds/kick.wav');
        this.animation = this.start.bind(this) // calling the start method
        this.animation()
    }
   
    start() {
        // this.drawBackground();
        // setInterval(() => {
         if(this.process++ == 2) { // animation frame slower
              this.clear()
              this.player1.moveAndDraw(this.player2)
              this.player2.moveAndDraw(this.player1)
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
}
