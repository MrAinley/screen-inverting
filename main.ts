function slowInvertScreen () {
    led.toggle(xflip, yflip)
    xflip += 1
    if (xflip > 4) {
        yflip += 1
        xflip = 0
        if (yflip > 4) {
            yflip = 0
        }
    }
}
function invertScreen () {
    for (let index = 0; index <= 4; index++) {
        for (let index2 = 0; index2 <= 4; index2++) {
            led.toggle(index, index2)
        }
    }
    return 0
}
let xflip = 0
let yflip = 0
yflip = 0
xflip = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showIcon(IconNames.Heart)
        yflip = 0
        xflip = 0
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Ghost)
        yflip = 0
        xflip = 0
    } else if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.EigthNote)
        yflip = 0
        xflip = 0
    } else {
        invertScreen()
        basic.pause(input.compassHeading())
    }
})
