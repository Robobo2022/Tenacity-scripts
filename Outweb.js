
var script = initScript({
    name: "Outweb",
    description: "moves out web",
    author: "Hydra"
})

var Outweb = script.booleanSetting("Outweb Toggle", false)

script.onTick(function () {
    if (Outweb.isEnabled() == true && player.inWeb()) {
        player.setSpeed(7)
    }
})