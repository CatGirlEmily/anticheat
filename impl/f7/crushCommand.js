import { clipY, inF7, isCloseTo, napisz, clip, setBlockRelative } from "../../utils"

register("command", () => {
    if (!inF7()) {napisz("Not in F7!"); return}
    
// green
if (isCloseTo(54, 169, 49, 5)) {
    Player.getPlayer().func_70107_b(54.5, 169, 49.5)
    Client.scheduleTask(1, () => clip(-7, 0, -7))
    Client.scheduleTask(2, () => clip(0, 0, -10))
    Client.scheduleTask(3, () => clip(-2, 2, -6))
    Client.scheduleTask(4, () => clip(-4, 0, -5)) }

// yellow
if (isCloseTo(54, 169, 73, 5)) {
    Player.getPlayer().func_70107_b(54.5, 169, 73.5)
    Client.scheduleTask(1, () => clip(-7, 0, 7))
    Client.scheduleTask(2, () => clip(0, 0, 10))
    Client.scheduleTask(3, () => clip(-2, 2, 6))
    Client.scheduleTask(4, () => clip(-4, 0, 5)) }

// purple
if (isCloseTo(108, 169, 73, 5)) {
    Player.getPlayer().func_70107_b(108.5, 169, 73.5)
    Client.scheduleTask(1, () => clip(7, 0, 7))
    Client.scheduleTask(2, () => clip(0, 0, 10))
    Client.scheduleTask(3, () => clip(2, 2, 6))
    Client.scheduleTask(4, () => clip(4, 0, 5)) }
}).setName("crush").setAliases("cr")
