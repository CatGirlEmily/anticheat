import Settings from "../../config"
import {isCloseTo, inF7, inP3, getHeldName, setMotion } from "../../utils"
import { inEE } from "../f7/earlyEntry"

const S12PacketEntityVelocity = Java.type("net.minecraft.network.play.server.S12PacketEntityVelocity")

let allow = true

register("tick", () => {
    allow = true
    if (!Settings.noVelocity) return

    if (!inF7()) return
    if (Settings.noVelocityType === 2) return
    const onTrack = World.getBlockAt(Player.getX(), Player.getY(), Player.getZ()).type.getRegistryName().includes("rail")
    const { field_70159_w: motionX, field_70179_y: motionZ } = Player.getPlayer()

    if (!inEE() && Settings.noVelocityType === 0 && Player.getPlayer().func_180799_ab()) Client.scheduleTask(1, () => Player.getPlayer().func_70016_h(motionX, 1.83, motionZ))
    if (!inEE() && Settings.noVelocityType === 0 && onTrack) Client.scheduleTask(1, () => Player.getPlayer().func_70016_h(motionX, 3.44, motionZ))
    
    if (Settings.noVelocityType === 1 && (onTrack || Player.getPlayer().func_180799_ab())) allow = false

})

register('packetReceived', (packet, event) => {
        if (Settings.jerry && getHeldName().includes("Jerry-chine Gun")) {
        cancel(event)
        setMotion(Player.getMotionX(), Player.getMotionY() + (packet.func_149410_e()/10000), Player.getMotionZ())
        return
    }
    if (!Settings.noVelocity) return

    if (allow) cancel(event)
}).setFilteredClass(S12PacketEntityVelocity)
