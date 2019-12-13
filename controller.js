class Controller {
    
    constructor(jumpControl, rightControl, leftControl, kickControl, blockControl, numberOfPlayer) {
        this.jumpControl = jumpControl
        this.rightControl = rightControl
        this.leftControl = leftControl
        this.kickControl = kickControl
        this.blockControl = blockControl
        this.numberOfPlayer = numberOfPlayer
        this.keyPressed = false
        this.leftKey = false
        this.rightKey = false
        this.upKey = false
        this.kickKey = false
        this.blockKey = false
        this.keyCount = 0
        this.jumpBtn = document.getElementById(`${this.numberOfPlayer}-up`)
        this.rightBtn = document.getElementById(`${this.numberOfPlayer}-right`)
        this.leftBtn = document.getElementById(`${this.numberOfPlayer}-left`)
        this.kickBtn = document.getElementById(`${this.numberOfPlayer}-atk`)
        this.blockBtn = document.getElementById(`${this.numberOfPlayer}-blk`)
        this.jumpBtn.addEventListener("touchstart", () => {
            this.emuleKeyDown(this.jumpControl)
        })
        this.jumpBtn.addEventListener("touchend", () => {
            this.emuleKeyUp(this.jumpControl)
        })
        this.rightBtn.addEventListener("touchstart", () => {
            this.emuleKeyDown(this.rightControl)
        })
        this.rightBtn.addEventListener("touchend", () => {
            this.emuleKeyUp(this.rightControl)
        })
        this.leftBtn.addEventListener("touchstart", () => {
            this.emuleKeyDown(this.leftControl)
        })
        this.leftBtn.addEventListener("touchend", () => {
            this.emuleKeyUp(this.leftControl)
        })
        this.kickBtn.addEventListener("touchstart", () => {
            this.emuleKeyDown(this.kickControl)
        })
        this.kickBtn.addEventListener("touchend", () => {
            this.emuleKeyUp(this.kickControl)
        })
        this.blockBtn.addEventListener("touchstart", () => {
            this.emuleKeyDown(this.blockControl)
        })
        this.blockBtn.addEventListener("touchend", () => {
            this.emuleKeyUp(this.blockControl)
        })
    }

    keyListener(event) {
        //console.log(event)
        event.preventDefault()
        const possibleKeystrokes = [this.jumpControl, this.rightControl, this.leftControl, this.kickControl, this.blockControl]
        //console.log(event.keyCode)
        if (possibleKeystrokes.includes(event.keyCode)) {
            this.keyPressed = (event.type == "keydown") ? true : false
            //this.key = event.keyCode
            switch (event.keyCode) {
                case this.leftControl: 
                    this.leftKey = this.keyPressed
                    break
                case this.jumpControl: 
                    this.upKey = this.keyPressed
                    break
                case this.rightControl: 
                    this.rightKey = this.keyPressed
                    break
                case this.blockControl:
                    this.blockKey = this.keyPressed
                    break
                 case this.kickControl:
                    this.keyCount++
                    this.kickKey = this.keyPressed
                    break
            }   
        }
    }

    emuleKeyDown(key) {
        const event = new KeyboardEvent('keydown', {
            keyCode: key,
        })
        window.dispatchEvent(event)
    }   

    emuleKeyUp(key) {
        const event = new KeyboardEvent('keyup', {
            keyCode: key,
        })
        window.dispatchEvent(event)
    } 

}