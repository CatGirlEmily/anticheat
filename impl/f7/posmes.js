import { inF7, isCloseTo } from "../../utils"
import Settings from "../../config"

tunnel = false
ss = false
mid = false
ee = false

register("tick", () => {
    if (!inF7()) return
    if (!Settings.posmes) return

    if (!tunnel && isCloseTo(62, 114, 70, 5)) {
        tunnel = true
        ChatLib.command("pc At Tunnel!")
    }

    if (!ss && isCloseTo(117, 120, 102, 5)) {
        ss = true
        ChatLib.command("pc At SS!")
    }

    if (!mid && isCloseTo(62, 65, 84, 7)) {
        mid = true
        ChatLib.command("pc At Mid!")
    }

    if (!ee && isCloseTo(93, 109, 141, 4)) {
        ee = true
        ChatLib.command("pc At Early Entry 2!")
    }

    


    
    
})

register("worldUnload", () => {
    tunnel = false
    ss = false
    mid = false
    ee = false
})