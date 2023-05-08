radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        arme = (arme + 1) % 2
        if (arme == 0) {
            robotbit.MotorRun(robotbit.Motors.M1B, 0)
        }
        if (arme == 1) {
            robotbit.MotorRun(robotbit.Motors.M1B, 255)
        }
    }
})
radio.onReceivedString(function (receivedString) {
    if ("ok" == receivedString) {
        basic.showLeds(`
            # . # . #
            # . # . .
            # . . # #
            . # . . .
            . . # # #
            `)
    }
})
radio.onReceivedValue(function (name, value) {
    if ("x" == name) {
        x = value / 4
    }
    if ("y" == name) {
        y = value / 4
    }
})
let arme = 0
let x = 0
let y = 0
basic.showLeds(`
    . . # . .
    . # # # .
    # # # # #
    . # . # .
    . # . # .
    `)
y = 0
x = 0
radio.setGroup(6)
basic.forever(function () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    y + x,
    robotbit.Motors.M2A,
    y - x
    )
})
