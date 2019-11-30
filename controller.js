class Controller {
    keyPressed = false
    leftKey = false
    rightKey = false
    upKey = false
    kickKey = false
    unsuportedKey = false

    keyListener(event) {
        event.preventDefault()
        this.keyPressed = (event.type == "keydown") ? true : false
        const possibleKeystrokes = [16, 37, 65, 38, 87, 39, 68] //83, 40 down arrow
        //console.log(event.keyCode)
        if (possibleKeystrokes.includes(event.keyCode)) {
            this.key = event.keyCode
            switch (event.keyCode) {
                case 37:
                case 65:
                    this.leftKey = this.keyPressed
                    this.unsuportedKey = false
                    break;
                case 87:
                case 38:
                    this.upKey = this.keyPressed
                    this.unsuportedKey = false
                    break;
                case 39:
                case 68:
                    this.rightKey = this.keyPressed
                    this.unsuportedKey = false
                    break;
                 case 16:
                    this.kickKey = this.keyPressed
                    this.unsuportedKey = false
                    break
            }
        } else {
                this.unsuportedKey = true
            }
            
    }
}