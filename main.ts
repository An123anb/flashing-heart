basic.showIcon(IconNames.Heart)
basic.showIcon(IconNames.Heart)
basic.clearScreen()
basic.pause(500)


basic.showIcon(IconNames.Heart)
basic.showIcon(IconNames.Heart)
basic.clearScreen()
basic.pause(500)
basic.showIcon(IconNames.SmallHeart)

basic.clearScreen()
basic.pause(500)
input.onPinPressed(TouchPin.P0, function() {
  Math.map(0, 0, 1023, 0, 4)  
})
bitbot.bbEnableBluetooth(BBBluetooth.btEnable)