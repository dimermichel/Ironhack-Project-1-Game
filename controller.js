class Controller {
    
    constructor(jumpControl, rightControl, leftControl, kickControl) {
        this.jumpControl = jumpControl
        this.rightControl = rightControl
        this.leftControl = leftControl
        this.kickControl = kickControl
        this.keyPressed = false
        this.leftKey = false
        this.rightKey = false
        this.upKey = false
        this.kickKey = false
        this.unsuportedKey = false
    }

    keyListener(event) {
        event.preventDefault()
        const possibleKeystrokes = [this.jumpControl, this.rightControl, this.leftControl, this.kickControl] //83, 40 down arrow
        //console.log(event.keyCode)
        if (possibleKeystrokes.includes(event.keyCode)) {
            this.keyPressed = (event.type == "keydown") ? true : false
            //this.key = event.keyCode
            switch (event.keyCode) {
                case this.leftControl: //65
                    this.leftKey = this.keyPressed
                    break
                case this.jumpControl: //38
                    this.upKey = this.keyPressed
                    break
                case this.rightControl: //68
                    this.rightKey = this.keyPressed
                    break
                 case this.kickControl: //16
                    this.kickKey = this.keyPressed
                    break
            }   
        }
    }
}