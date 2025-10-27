const BlockPoss = Java.type("net.minecraft.util.BlockPos")
const setAir = (x, y, z) => World.getWorld().func_175698_g(new BlockPoss(x, y, z))
const setBlockState = (x, y, z, state) => World.getWorld().func_175656_a(new BlockPoss(x, y, z), state)

import Settings from "../../config"

let carpets = []
register("tick", () => {
    if (!Settings.ihatecarpets) return
    const pX = Math.floor(Player.getX())
    const pY = Math.floor(Player.getY())
    const pZ = Math.floor(Player.getZ())
    for (let x = pX-5; x < pX+5; x++) {
        for (let y = pY-3; y < pY+2; y++) {
            for (let z = pZ-5; z < pZ+5; z++) {
                let block = World.getBlockAt(x, y, z)
                if (!block || block.type.getID() !== 171) continue
                let blockBelow = World.getBlockAt(x, y-1, z)
                if (!blockBelow) continue
                carpets.push([block.getState(), x, y, z])
                setAir(x, y, z)
            }
        }
    }
    // ChatLib.chat(carpets.length)
})

register("tick", () => {
    if (!Settings.ihatecarpets) return
    const x0 = Math.floor(Player.getX())
    const y0 = Math.floor(Player.getY())
    const z0 = Math.floor(Player.getZ())
    for (let i = 0; i < carpets.length; i++) {
        let [oldState, x1, y1, z1] = carpets[i]
        if (Math.abs(x1 - x0) > 3 || Math.abs(y1 - y0) > 3 || Math.abs(z1 - z0) > 3) {
            setBlockState(x1, y1, z1, oldState)
            carpets.splice(i, 1)
        }
    }
})
