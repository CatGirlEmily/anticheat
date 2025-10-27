/// <reference types="../../../CTAutocomplete" />
/// <reference lib="es2015" />

import { napisz } from "../../utils"

let fly_real = false

register(net.minecraftforge.fml.common.gameevent.InputEvent.KeyInputEvent, () => {
    if (Player.getName === "MikoGames20") return
    if (!Keyboard.getEventKeyState()) return
    
    if (Keyboard.getEventKey() !== 6) return
    fly_real = !fly_real;
    napisz("Fly: &f&l" + fly_real)
    if (!fly_real) {
    Client.getMinecraft().field_71439_g.field_71075_bZ.field_75100_b = false;
    }
})

register("tick", () => {
    if (!fly_real) return
    Client.getMinecraft().field_71439_g.field_71075_bZ.field_75100_b = true;
    Client.getMinecraft().field_71439_g.field_71075_bZ.func_75092_a(10);

})