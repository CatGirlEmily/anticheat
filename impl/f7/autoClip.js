import { clipY, inF7, napisz, drawEspBox, unFakepixelise } from "../../utils"
import Settings from "../../config"

const clipDown = [
    [108, 169, 49, -4, 5],
    [62, 114, 122, -5, 4],
    [77, 221, 41, -8, 1.5],
    [62, 65, 84, -8, 3],
    [98, 106, 61, -5, 2]
]

// przesun wszystko o x+8 i z+8

register("renderWorld", () => {
    if (!inF7()) return
    if (!Settings.vClip || !Settings.vClipEsp) return

    drawEspBox(77.5, 221, 41.5, 1.5, 1, 128, 0, 128, 0.8, Settings.vClipEspPhasing)   // maxor
    drawEspBox(108.5, 169, 49.5, 7, 1, 0, 0, 255, 0.8, Settings.vClipEspPhasing)  // red pillar
    drawEspBox(62.5, 114, 122.5, 7, 1, 255, 230, 0, 1, Settings.vClipEspPhasing) // tunnel
    drawEspBox(99, 106, 61, 2, 1, 255, 230, 0, 1, Settings.vClipEspPhasing) // lava
    drawEspBox(62.5, 65, 84.5, 6, 1, 170, 0, 0, 0.92, Settings.vClipEspPhasing)    // m7
})

register("step", () => {
    if (!Settings.vClip) return
    if (!inF7()) return
    if (!Player.isSneaking()) return
    const px = Math.floor(Player.getX())
    const py = Math.floor(Player.getY())
    const pz = Math.floor(Player.getZ())

    clipDown.forEach(([x, y, z, d, r]) => {
        [x, z] = unFakepixelise(x, z)

        if (
            Math.abs(px - x) < r &&
            Math.abs(py - y) < 1.5 &&
            Math.abs(pz - z) < r
        ) {
            clipY(d)
            napisz("Clipped: &l&f" + d)
        }
    })
}).setFps(10)
