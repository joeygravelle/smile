input.onButtonPressed(Button.A, function () {
    input.setAccelerometerRange(AcceleratorRange.OneG)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . # . . .
            . . . # .
            . . . . .
            . . . . .
            . # # # .
            `)
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    input.setAccelerometerRange(AcceleratorRange.OneG)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    input.setAccelerometerRange(AcceleratorRange.OneG)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            # . # . #
            `)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . . . .
            # # # # #
            # . # . #
            `)
    }
})
music.playMelody("E B C5 A B G A F ", 120)
