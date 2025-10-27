import { drawEspBox, centerPlayer, clip, clipTo, clipY, inF7, isCloseTo, napisz, resetMotion, setAngle, setBlockAt, setBlockRelative, inDungeon } from "../../utils"
import RenderLib from "../../../RenderLib/index"
import Settings from "../../config"

let delay = false
const entry = [
    [112, 106, 130],
    [26, 106, 61],
    [27, 106, 136]
]

register("renderWorld", () => {
    if (!inF7()) return
    if (!Settings.earlyEntry || !Settings.earlyEntryEsp) return
    entry.forEach(([x, y, z]) => {
    drawEspBox(x,y,z, 2, 1, 0, 255, 0, 0.7, Settings.earlyEntryEspPhase)
    })
    
})

register("tick", () => {
    if (!inF7()) return
    if (!inDungeon()) return
    if (delay) return

    if (isCloseTo(111.9, 106, 129.9, 1.5)) {
        delay = true
        napisz("ee2 proceed!")
        resetMotion()
        clipTo(111.9, 106, 129.9)
        
        setBlockAt(111, 97, 129, 95)
        setBlockAt(110, 97, 137, 95)
        setBlockAt(100, 97, 137, 95)
        setBlockAt(100, 100, 137, 95)

        Client.scheduleTask(1, () => clipY(-9))
        Client.scheduleTask(2, () => centerPlayer())
        Client.scheduleTask(3, () => clip(-1, 0, 8))
        Client.scheduleTask(4, () => clip(-10, 0, 0))
        Client.scheduleTask(5, () => clipTo(100.5, 101, 137.5))
        Client.scheduleTask(6, () => clipY(10))
        Client.scheduleTask(7, () => clip(-2, 5, 4))
        Client.scheduleTask(8, () => {
            clip(-5, 0, -0.5)
            setAngle(90, 0) })
        Client.scheduleTask(10, () => delay = false)
        return
    }

        if (isCloseTo(27, 106, 136, 1.5)) {
        delay = true
        napisz("ee3 proceed!")
        resetMotion()
        
        setBlockAt(26, 98, 136, 95)
        setBlockAt(16, 98, 136, 95)
        setBlockAt(16, 98, 130, 95)

        clipTo(27.5, 106, 136.5)
        setAngle(180, 0)
        Client.scheduleTask(1, () => clipTo(26.5, 106, 136.5))
        Client.scheduleTask(2, () => clipY(-7))
        Client.scheduleTask(3, () => clip(-10,0,0))
        Client.scheduleTask(5, () => clip(0,0,-6))
        Client.scheduleTask(6, () => clipY(10))
        Client.scheduleTask(7, () => clip(0,0,-7))    


        Client.scheduleTask(10, () => delay = false)
        return
    }


    if (isCloseTo(26, 106, 60.9, 1.5)) {
        delay = true
        napisz("ee4 proceed!")
        resetMotion()
        clipTo(26.5, 101, 60.5)
        
        setBlockAt(26, 100, 60, 95)
        setBlockAt(29, 100, 56, 95)

        Client.scheduleTask(1, () => clipTo(29, 101, 56))
        Client.scheduleTask(2, () => clipY(10))
        Client.scheduleTask(3, () => {
            clipTo(28.9, 115, 48)
            setAngle(-90, 0)})
        Client.scheduleTask(4, () => resetMotion())
        Client.scheduleTask(5, () => delay = false)
        return
    }
})

export function inEE() {
    return delay
}