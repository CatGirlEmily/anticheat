import Settings from "../../config"
import { inDungeon } from "../../utils";

const EntityArmorStand = Java.type("net.minecraft.entity.item.EntityArmorStand");
register("renderEntity", (entity, pos, partialTick, event) => {
  if (!inDungeon()) return
  let name = entity.getName().removeFormatting()

  if (Settings.hideTnt && name === "Superboom TNT") cancel(event)
  
}).setFilteredClass(EntityArmorStand.class)

//
// items
//
let shit = [
  "Enchanted Rotten Flesh",
  "Fel Pearl",
  "1 Coins",
  "Young Dragon Fragment",
  "Enchanted Bone",
  "Dungeon Orb"
]

let mobLoot = [
  "Skeleton Soldier",
  "Zombie Soldier",
  "Zombie Lord",
  "Machine Gun Bow",
  "Skeleton Master",
  "Zombie Knight",
  "Earth Shard"
]

const EntityItem = Java.type("net.minecraft.entity.item.EntityItem");
register("renderEntity", (entity, pos, partialTick, event) => {
    if (!inDungeon()) return
    if (!Settings.hideShit && !Settings.mobLoot) return

    let d = entity.distanceTo(Player.getPlayer())
    if (d >= 20) return;

    let itemDropped = new Item(entity.getEntity())
    let itemName = itemDropped?.getNBT()?.toObject()?.tag?.display?.Name?.removeFormatting()
    if (!itemName) return
    
    if (Settings.hideMobLoot) {
      mobLoot.forEach(i => {
        if (itemName.includes(i)) {
          cancel(event)
          return
        }
      })
    }
    
    if (Settings.hideShit) {
      shit.forEach(i => {
        if (itemName.includes(i)) {
          cancel(event)
          return
        }
      })
    }
    
    //ChatLib.chat(itemName)

}).setFilteredClass(EntityItem.class)
