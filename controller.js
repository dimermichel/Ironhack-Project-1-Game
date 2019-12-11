class Controller {
    
    constructor(jumpControl, rightControl, leftControl, kickControl, blockControl) {
        this.jumpControl = jumpControl
        this.rightControl = rightControl
        this.leftControl = leftControl
        this.kickControl = kickControl
        this.blockControl = blockControl
        this.keyPressed = false
        this.leftKey = false
        this.rightKey = false
        this.upKey = false
        this.kickKey = false
        this.blockKey = false
        this.keyCount = 0
    }

    keyListener(event) {
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
}