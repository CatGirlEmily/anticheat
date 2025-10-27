import Settings from "../../config"
import { inDungeon, inF7 } from "../../utils";

const KeyBinding = Java.type("net.minecraft.client.settings.KeyBinding");

const trigger = register("tick", () => {
    if (!inF7()) return
    if (!Settings.coreclip) return
    const [x, y, z] = [Player.getX(), Player.getY(), Player.getZ()];
    if (y !== 115) return;
    if (x < 60 || x > 65) return; // było 52–57, teraz +8

    const handleKeys = () => {
        const gameSettings = Client.getMinecraft().field_71474_y;
        const keys = [
            gameSettings.field_74351_w.func_151463_i(), 
            gameSettings.field_74370_x.func_151463_i(), 
            gameSettings.field_74366_z.func_151463_i(), 
            gameSettings.field_74368_y.func_151463_i()
        ];
        for (let key of keys) {
            KeyBinding.func_74510_a(key, false);
        }
        Client.scheduleTask(() => {
            for (let key of keys) {
                KeyBinding.func_74510_a(key, Keyboard.isKeyDown(key));
            }
        });
    };

    if (isWithinTolerence(z, 61.7)) { // było 53.7
        Player.getPlayer().func_70107_b(x, y, 61.7624); // było 53.7624
        Client.scheduleTask(() => Player.getPlayer().func_70107_b(x, y, 63.301)); // było 55.301
        handleKeys();

    } else if (isWithinTolerence(z, 63.3)) { // było 55.3
        Player.getPlayer().func_70107_b(x, y, 63.2376); // było 55.2376
        Client.scheduleTask(() => Player.getPlayer().func_70107_b(x, y, 61.699)); // było 53.699
        handleKeys();
    }
}).unregister();

trigger.register();

function isWithinTolerence(n1, n2) {
    return Math.abs(n1 - n2) < 1e-4;
};
