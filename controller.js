class Controller {
    keyPressed = false
    leftKey = false
    rightKey = false
    upKey = false

    keyListener(event) {
        event.preventDefault()
        this.keyPressed = (event.type == "keydown") ? true : false
        const possibleKeystrokes = [37, 65, 38, 87, 39, 83, 40, 68]
        //console.log(event.keyCode)
        if (possibleKeystrokes.includes(event.keyCode)) {
            this.key = event.keyCode
            switch (event.keyCode) {
                case 37:
                case 65:
                    this.leftKey = this.keyPressed
                    break;
                case 87:
                case 38:
                    this.upKey = this.keyPressed
                    break;
                case 39:
                case 68:
                    this.rightKey = this.keyPressed
                    break;
                // case 40:
                // case 68:
                //     this.state = STATE.DOWN
                //     break;
            }
        }
    }
}