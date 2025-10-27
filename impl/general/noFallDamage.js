import Settings from "../../config"
import { C03PacketPlayer } from "../../utils";

register("tick", () => {
    if (!Settings.nofall) return
    if(Client.getMinecraft().field_71439_g.field_70143_R >= 2) {
        Client.sendPacket(new C03PacketPlayer(true));
        Client.getMinecraft().field_71439_g.field_70143_R = 0;
    }
})