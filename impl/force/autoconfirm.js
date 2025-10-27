import { S2DPacketOpenWindow, sendWindowClick } from "../../utils";

register("packetReceived", (packet, event) => {
    wid = packet.func_148901_c()

    if (String(packet.func_179840_c()).includes("Confirm Donation")) {
        sendWindowClick(wid, 11, 0)
        return
    }

    if (String(packet.func_179840_c()).includes("Consume Booster Cookie?")) {
        sendWindowClick(wid, 11, 0) 
        cancel(event)
        return
    }
    
}).setFilteredClass(S2DPacketOpenWindow)
