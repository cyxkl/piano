let line0 = 0
let line1 = 0
let line2 = 0
let line3 = 0
let line4 = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        music.playMelody("D F D G F D F D ", 333)
    }
    if (input.buttonIsPressed(Button.B)) {
        music.stopAllSounds()
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        music.playMelody("F D E D F D G F ", 200)
    }
    if (input.buttonIsPressed(Button.A)) {
        music.stopAllSounds()
    }
})
basic.forever(function () {
    line0 = pins.digitalReadPin(DigitalPin.P2)
    line1 = pins.digitalReadPin(DigitalPin.P8)
    line2 = pins.digitalReadPin(DigitalPin.P1)
    line3 = pins.analogReadPin(AnalogPin.P1)
    line4 = pins.analogReadPin(AnalogPin.P2)
    if (line0 || (line1 || line2)) {
        basic.pause(30)
        line0 = pins.digitalReadPin(DigitalPin.P2)
        line1 = pins.digitalReadPin(DigitalPin.P8)
        line2 = pins.digitalReadPin(DigitalPin.P1)
        line3 = pins.analogReadPin(AnalogPin.P1)
        line4 = pins.analogReadPin(AnalogPin.P2)
        if (!(line2) && (!(line1) && line0)) {
            music.playTone(262, music.beat(BeatFraction.Half))
        }
        if (!(line2) && (line1 && !(line0))) {
            music.playTone(294, music.beat(BeatFraction.Half))
        }
        if (!(line2) && (line1 && line0)) {
            music.playTone(330, music.beat(BeatFraction.Half))
        }
        if (line2 && (!(line1) && !(line0))) {
            music.playTone(349, music.beat(BeatFraction.Half))
        }
        if (line2 && (!(line1) && line0)) {
            music.playTone(392, music.beat(BeatFraction.Half))
        }
        if (line2 && (line1 && !(line0))) {
            music.playTone(440, music.beat(BeatFraction.Half))
        }
        if (line2 && (line1 && line0)) {
            music.playTone(494, music.beat(BeatFraction.Half))
        }
    }
})
