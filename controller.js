class Controller {
    keyPressed = false
    leftKey = false
    rightKey = false
    upKey = false
    kickKey = false
    unsuportedKey = false

    constructor(jumpControl, rightControl, leftControl, kickControl) {
        this.jumpControl = jumpControl
        this.rightControl = rightControl
        this.leftControl = leftControl
        this.kickControl = kickControl
    }

    keyListener(event) {
        event.preventDefault()
        this.keyPressed = (event.type == "keydown") ? true : false
        const possibleKeystrokes = [this.jumpControl, this.rightControl, this.leftControl, this.kickControl] //83, 40 down arrow
        //console.log(event.keyCode)
        if (possibleKeystrokes.includes(event.keyCode)) {
            this.key = event.keyCode
            switch (event.keyCode) {
                case this.leftControl: //65
                    this.leftKey = this.keyPressed
                    this.unsuportedKey = false
                    break;
                case this.jumpControl: //38
                    this.upKey = this.keyPressed
                    this.unsuportedKey = false
                    break;
                case this.rightControl: //68
                    this.rightKey = this.keyPressed
                    this.unsuportedKey = false
                    break;
                 case this.kickControl: //16
                    this.kickKey = this.keyPressed
                    this.unsuportedKey = false
                    break
            }
        } else {
                this.unsuportedKey = true
            }
            
    }
}