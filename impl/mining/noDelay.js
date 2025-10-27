import Settings from "../../config"

register("tick", () => {
    if (!Settings.noDelay) return
        const mc = Client.getMinecraft();
        const leftClickCounter = mc.getClass().getDeclaredField("field_71429_W");
        const playerController = mc.field_71442_b;
        const blockHitDelay = playerController.getClass().getSuperclass().getDeclaredField("field_78781_i");

        [leftClickCounter, blockHitDelay].forEach((field) => field.setAccessible(true));

        leftClickCounter.setInt(mc, 0);
        blockHitDelay.setInt(playerController, 0);    
});
