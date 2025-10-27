import { inF7, S02PacketChat } from "../../utils";
import Settings from "../../config"

let maxor = 0.0
let storm = 0.0
let goldor = 0.0
let necron = 0.0

let maxorStamp = null
let stormStamp = null
let goldorStamp = null
let necronStamp = null

let end = false

register("command", (args) => {
    switch (args) {
        case "maxor":
            maxorStamp = Date.now()
            stormStamp = goldorStamp = necronStamp = null
            break
        case "storm":
            stormStamp = Date.now()
            maxorStamp = goldorStamp = necronStamp = null
            break
        case "goldor":
            goldorStamp = Date.now()
            maxorStamp = stormStamp = necronStamp = null
            break
        case "necron":
            necronStamp = Date.now()
            maxorStamp = stormStamp = goldorStamp = null
            break
    }
}).setName("debugf7start")

register("renderOverlay", () => {
    if (!Settings.f7timers) return
    if (!inF7()) return

    if (maxorStamp && !stormStamp) maxor = (Date.now() - maxorStamp) / 1000
    if (stormStamp && !goldorStamp) storm = (Date.now() - stormStamp) / 1000
    if (goldorStamp && !necronStamp) goldor = (Date.now() - goldorStamp) / 1000
    if (necronStamp && !end) necron = (Date.now() - necronStamp) / 1000

    if (maxor > 0) Renderer.drawString("&5Maxor: " + maxor.toFixed(2), 10, 10, true)
    if (storm > 0) Renderer.drawString("&3Storm: " + storm.toFixed(2), 10, 20, true)
    if (goldor > 0) Renderer.drawString("&eGoldor: " + goldor.toFixed(2), 10, 30, true)
    if (necron > 0) Renderer.drawString("&4Necron: " + necron.toFixed(2), 10, 40, true)
})

register("packetReceived", (packet) => {
    if (packet.func_179841_c() === 2) return
    const message = ChatLib.removeFormatting(packet.func_148915_c().func_150260_c())
    switch (message) {
        case "[BOSS] Maxor: WELL WELL WELL LOOK WHO'S HERE!":
            maxorStamp = Date.now()
            stormStamp = goldorStamp = necronStamp = null
            break
        case "[BOSS] Storm: Pathetic Maxor, just like expected":
            stormStamp = Date.now()
            maxorStamp = goldorStamp = necronStamp = null
            break
        case "[BOSS] Goldor: Who dares trespass into my domain?":
            goldorStamp = Date.now()
            maxorStamp = stormStamp = necronStamp = null
            break
        case "[BOSS] Necron: You went further than any human before, congratulations.":
            necronStamp = Date.now()
            maxorStamp = stormStamp = goldorStamp = null
            break
        case "[BOSS] Necron: All this, for nothing...":
            end = true
            break
    }
}).setFilteredClass(S02PacketChat)

register("worldUnload", () => {
    maxor = storm = goldor = necron = 0.0
    maxorStamp = stormStamp = goldorStamp = necronStamp = null
    end = false
})
