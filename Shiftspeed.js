var script = initScript({
    name: "ShiftSpeed",
    description: "makes sneaking faster",
    author: "Hydra"
})

//Shift walkspeed
var ShiftSpeedToggle = script.booleanSetting("ShiftSpeed Toggle", false)
var Shiftspeed = script.numberSetting("ShiftSpeed", 1, 0.1, 10, 0.1)

script.onMotion(function () {
    if (ShiftSpeedToggle.isEnabled() == true && player.onGround() && player.sneaking()) {
        player.setSpeed(Shiftspeed.getValue())
    
    }
})

