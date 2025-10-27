import { S2DPacketOpenWindow, sendWindowClick } from "../../utils";

state = false
a = 0

forgemacro = register("packetReceived", (packet) => {
    wid = packet.func_148901_c()
    let name = String(packet.func_179840_c())
    if (name.includes("Forge") && !name.includes("Arrows")) {
        sendWindowClick(wid, 10+a, 0)
        a++
        if (a == 7) a = 0
        return
        }

    //ChatLib.chat(String(packet.func_179840_c()))
    if (name.includes("Select Process")) sendWindowClick(wid, 13, 0)
    if (name.includes("Forging")) sendWindowClick(wid, 10, 0)
    if (name.includes("Confirm Process")) sendWindowClick(wid, 31, 0)    
}).setFilteredClass(S2DPacketOpenWindow).unregister()

register("command", () => {
    state = !state
    ChatLib.chat("Forge Macro: " + state)

    if (state) forgemacro.register()
    else forgemacro.unregister()
}).setName("macroforge")