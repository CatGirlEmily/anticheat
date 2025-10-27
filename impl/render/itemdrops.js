
import RenderLib from "../../../RenderLib/index";
import { inDungeon } from "../../utils";
import Settings from "../../config"

let secrets = new Set(["Candycomb", "Revive Stone", "Trap", "Decoy", "Inflatable Jerry", "Defuse Kit", "Dungeon Chest Key", "Treasure Talisman", "Architect's First Draft", "Spirit Leap", "Healing VIII Splash Potion", "Training Weights"])

const EntityItem = Java.type("net.minecraft.entity.item.EntityItem");
register("renderEntity", (entity, pos, partialTick, event) => {
    if (!inDungeon()) return
    if (!Settings.itemdrops) return
  let d = entity.distanceTo(Player.getPlayer())
  if(d >= 20) return;
  let itemDropped = new Item(entity.getEntity())
  let itemName = itemDropped?.getNBT()?.toObject()?.tag?.display?.Name?.removeFormatting()
  if(!itemName || itemName==undefined || !secrets.has(itemName)) return
  
  RenderLib.drawInnerEspBox(entity.getX()-.1, entity.getY(), entity.getZ()-.2, .5, .5, d > 3.5 ? 1 : 0, d > 3.5 ? 0 : 1, 0, 1, true)
  cancel(event)
}).setFilteredClass(EntityItem.class)