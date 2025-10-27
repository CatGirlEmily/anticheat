import { setMotion } from "../../utils"

register("command", (args) => {
    v = args
    if (!args) v = 1.5
    setMotion(0, v, 0)
}).setName("jump")