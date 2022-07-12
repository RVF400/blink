input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 A C5 A C5 A C5 A ", 120)
    while (!(input.buttonIsPressed(Button.B))) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    music.stopMelody(MelodyStopOptions.All)
})
