import RenderLib from "../RenderLib/index"

const boxRegister = register('renderWorld', () => {
    RenderLib.drawEspBox(84, 16 , 95, 25, 10, 0, 170/255, 170/255,1, false);
    RenderLib.drawEspBox(57, 13, 125, 23, 10, 170/255, 0, 170/255,1, false);
    RenderLib.drawEspBox(22, 8, 95, 32, 20, 85/255, 255/255, 85/255,1, false);
    RenderLib.drawEspBox(27, 13, 58, 25, 15, 255/255, 85/255, 85/255,1, false);
    RenderLib.drawEspBox(87, 8, 62, 28, 20, 255/255, 170/255, 0,1, false);
})


register("step", () => {
    if (!World.isLoaded()) return
    //boxestoRender.blue = !World.getBlockAt(79, 23, 94).type.getName().includes("air")
    //boxestoRender.purple = !World.getBlockAt(56, 22, 120).type.getName().includes("air")
    //boxestoRender.green = !World.getBlockAt(32, 23, 94).type.getName().includes("air")
    //boxestoRender.red = !World.getBlockAt(32, 22, 59).type.getName().includes("air")
    //boxestoRender.orange = !World.getBlockAt(80, 23, 56).type.getName().includes("air")

    boxRegister.register()

}).setFps(1)