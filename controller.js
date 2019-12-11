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
        this.keyCount = 0
    }

    keyListener(event) {
        event.preventDefault()
        const possibleKeystrokes = [this.jumpControl, this.rightControl, this.leftControl, this.kickControl]
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
                 case this.kickControl:
                    this.kickKey = this.keyPressed
                    this.keyCount++
                    break
            }   
        }
    }
}