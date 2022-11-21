var script = initScript({
    name: "Auto ladder",
    description: "Auto climb ladder",
    author: "Hydra"
})

var autoladder = script.booleanSetting("Outweb Toggle", false)
var Ladderspeed = script.numberSetting("Speed", 0.1, 0.01, 1, 0.01)

script.onTick(function () {
    if (autoladder.isEnabled() == true && player.onLadder()) {
        player.setMotionY(Ladderspeed.getValue())
    }
})