input.onButtonPressed(Button.A, function () {
    if (input.temperature() < 40) {
        basic.showString("oh ne serin hava")
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
})
