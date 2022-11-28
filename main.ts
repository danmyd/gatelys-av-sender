radio.setGroup(1)
basic.forever(function () {
    if (input.lightLevel() < 50) {
        radio.sendNumber(1)
    } else {
        radio.sendNumber(0)
    }
    basic.pause(500)
})
