import Settings from "../../config"

const shit = Java.type("net.minecraft.network.play.server.S2APacketParticles")

register("renderEntity", (entity, position, a, event) => {
  if (Settings.renderNothing) cancel(event)
})

register("packetReceived", (packet, event) => {
  if (Settings.renderNothing) cancel(event)
}).setFilteredClass(shit)