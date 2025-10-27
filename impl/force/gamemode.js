import {clipY, onFP} from "../../utils"

register("command", (args) => {
    clipY(args)
}).setName("clip")

register("command", (args) => {
    if (onFP()) return

    if ((Client.getMinecraft().field_71442_b.func_178889_l()) == "SPECTATOR") {
        ChatLib.command("gamemode 1")
        return
    }
    if ((Client.getMinecraft().field_71442_b.func_178889_l()) == "CREATIVE") {
        ChatLib.command("gamemode 3")
        return
    }
}).setName("g")