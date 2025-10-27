import { S2DPacketOpenWindow, sendWindowClick, closeWindow} from "../../utils";

used_command = 0

register("command", () => {
    used_command = 1
    opengui.register()
    ChatLib.command("modifyitem")
}).setName("rih")


opengui = register("packetReceived", (packet, event) => {
    if (used_command === 0) return
    cancel(event)
    cwid = packet.func_148901_c()

    if (String(packet.func_179840_c()).includes("Manage Item Attributes")) {
        if (used_command === 1) { sendWindowClick(cwid, 19, 0); used_command = 2; return}
        if (used_command === 2) { sendWindowClick(cwid, 49, 0); used_command = 0; opengui.unregister(); closeWindow(cwid); return}
    }
}).setFilteredClass(S2DPacketOpenWindow).unregister()



// this is written TERRIBLY but it works so whatever, can't be bothered to rewrite it
// okay actually i tried to make it trigger based but nothing more i swear  