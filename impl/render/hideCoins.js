import Settings from "../../config"

const EntityItem = Java.type("net.minecraft.entity.item.EntityItem");
register("renderEntity", (entity, pos, partialTick, event) => {
    if (!Settings.hideCoins) return

  let itemDropped = new Item(entity.getEntity())
  let itemName = itemDropped?.getNBT()?.toObject()?.tag?.display?.Name?.removeFormatting()
    if (itemName === "1 Coins") cancel(event)
}).setFilteredClass(EntityItem.class)