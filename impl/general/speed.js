import Settings from "../../config"

register("tick", () => {
    if (!Settings.customSpeed) return
    Player.getPlayer().func_110148_a(net.minecraft.entity.SharedMonsterAttributes.field_111263_d).func_111128_a(Settings.customSpeedValue/1000)
    Player.getPlayer().field_71075_bZ.func_82877_b(Settings.customSpeedValue/1000)
})