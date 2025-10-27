import { getHeldName, setRayToAir } from "../../utils"
import Settings from "../../config"

const C07PacketPlayerDigging = Java.type("net.minecraft.network.play.client.C07PacketPlayerDigging")

register("packetSent", (packet, event) => {
    if (!Settings.ghostPick) return
    if (getHeldName() !== "Stonk") return

    cancel(event)
    setRayToAir()
}).setFilteredClass(C07PacketPlayerDigging)