import Settings from "../../config"
import { EntityArmorStand, inDungeon } from "../../utils"
a = false
const checked = []

register("step", () => {
    if (!inDungeon()) return
    if (!Settings.keysTp) return
    World.getAllEntitiesOfType(EntityArmorStand).forEach(e => {
        const name = e.getName()
        if (!checked.some(n => n === name)) {

            if (name == "§8Wither key" || name == "§cBlood key") {

                let dist = e.distanceTo(Player.getX(), Player.getY(), Player.getZ());

                if (dist < 9) {
                    Player.getPlayer().func_70107_b(e.getX(), e.getY()+0.5, e.getZ())
                    a = true
                    pick.register()
                    checked.push(name)
                }

            } else checked.push(name)
}})})

const pick = register("chat", () => {
    if (!inDungeon()) return
    if (!Settings.keysTp) return
    Client.scheduleTask(2, () => checked.length = 0)
    pick.unregister()
}).setCriteria(/^(?:.+ has obtained Wither Key!|A Wither Key was picked up!)$/)

register("worldLoad", () => {
    checked.length = 0

    if (a) {
    pick.unregister()
    a = false }
})
