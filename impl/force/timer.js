import { napisz } from "../../utils"

speed = 1

register("command", (args) => {
    let newSpeed = 1

    if (args && !isNaN(parseFloat(args))) {
        newSpeed = parseFloat(args)
    } else if (args) {
        ChatLib.chat("&cInput a valid number (for example 1.5), not " + args)
        return
    }

    if (newSpeed === speed) newSpeed = 1
    speed = newSpeed

    napisz("Timer: &f&l" + speed*20 + "&7tps")

    if (speed !== 1) trigger.register()
}).setName("tick")

const trigger = register("tick", () => {
    if (speed == 1) trigger.unregister()

    const timer = Client.getMinecraft().class.getDeclaredField("field_71428_T");
    timer.setAccessible(true);
    timer.get(Client.getMinecraft()).field_74278_d = speed;
})

register("worldUnload", () => speed = 1)