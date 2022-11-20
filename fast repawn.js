var script = initScript({
    name: "Fast Respawn",
    description: "Hydra's Respawn",
    author: "Hydra"
})

script.onTick(function () {
    if (player.health() <= 0 ) {
        player.respawn()
    }
})
