/// <reference types="../CTAutocomplete" />
/// <reference lib="es2015" />
let isF7 = false
let isP3 = false

import RenderLib from "../RenderLib/index"

export const MCBlock = Java.type("net.minecraft.block.Block")
export const EntityArmorStand = Java.type("net.minecraft.entity.item.EntityArmorStand")
export const EntityBat = Java.type("net.minecraft.entity.passive.EntityBat")
export const S2DPacketOpenWindow = Java.type("net.minecraft.network.play.server.S2DPacketOpenWindow")
export const C0EPacketClickWindow = Java.type("net.minecraft.network.play.client.C0EPacketClickWindow")
export const S02PacketChat = Java.type("net.minecraft.network.play.server.S02PacketChat");
export const S2EPacketCloseWindow = Java.type("net.minecraft.network.play.server.S2EPacketCloseWindow")
export const Vec3 = Java.type("net.minecraft.util.Vec3");
export const EnumFacing = Java.type("net.minecraft.util.EnumFacing");
export const BlockPosFix = Java.type("net.minecraft.util.BlockPos");
export const C03PacketPlayer = Java.type("net.minecraft.network.play.client.C03PacketPlayer");
export const C02PacketUseEntity = Java.type("net.minecraft.network.play.client.C02PacketUseEntity");
export const C08PacketPlayerBlockPlacement = Java.type("net.minecraft.network.play.client.C08PacketPlayerBlockPlacement")


export function raytrace(dist) {
    const vecAng = Player.getPlayer().func_174822_a(dist, 0);
    if (!vecAng) return null;
    const blockPos = vecAng?.func_178782_a();
    if (!blockPos) return null;
    const blockAt = World.getBlockAt(new BlockPos(blockPos));
    if (!blockAt || !blockAt.type.getID()) return null;
    return blockAt;
}

export function holdingAOTV() {
const heldItem = Player.getHeldItem()?.getName()
return heldItem && (heldItem.includes("Diamond Shovel") || heldItem.includes("Aspect of the Void"))
}

export function getHeldName() {
    const heldItem = Player.getHeldItem()?.getName()?.removeFormatting();
    return heldItem ?? "";
}


export function onFP() { 
    return (Server.getIP().includes("fakepixel.fun"))
}

export function unFakepixelise(x, z) { 
    if (!onFP()) return [x - 8, z - 8]
    return [x, z]
}


// action
export function napisz(text) {
    ChatLib.chat("&8[&5&lAC&r&8] &7" + text)
}

export function clipY(d) { 
    Player.getPlayer().func_70107_b(Player.getX(), Player.getY() + parseFloat(d), Player.getZ())
}

export function clip(x = 0, y = 0, z = 0) { 
    Player.getPlayer().func_70107_b(Player.getX() + parseFloat(x), Player.getY() + parseFloat(y), Player.getZ() + parseFloat(z))
}

export function clipTo(x, y, z) {
    [x, z] = unFakepixelise(x, z)
    Player.getPlayer().func_70107_b(x, y, z)
}

export function resetMotion() { 
    Player.getPlayer().func_70016_h(0, 0, 0)
}

export const motionForward = (m = 2, y = 0) => {
    const radians = Player.getYaw() * Math.PI / 180
    let [newX, newZ] = [0, 0]
    if (Math.abs(-Math.sin(radians)) > Math.abs(Math.cos(radians))) newX += m * Math.sign(-Math.sin(radians))
    else newZ += m * Math.sign(Math.cos(radians))
    Player.getPlayer().func_70016_h(newX, y, newZ) 
}

export function setMotion(x, y, z) { 
    Player.getPlayer().func_70016_h(x, y, z)
}

export function setAngle(yaw, pitch) {
    let player = Client.getMinecraft().field_71439_g
    player.field_70177_z = yaw
    player.field_70125_A = pitch
}

export function centerPlayer() {
    resetMotion()
    Player.getPlayer().func_70107_b(
        (Math.floor(Player.getX()) + 0.5).toFixed(1),
        Math.floor(Player.getY()).toFixed(0),
        (Math.floor(Player.getZ()) + 0.5).toFixed(1)
    )
}

export function rightClick() {
    const rightClickMethod = Client.getMinecraft().getClass().getDeclaredMethod("func_147121_ag", null)
    rightClickMethod.setAccessible(true)
    rightClickMethod.invoke(Client.getMinecraft(), null)
}

export function leftClick() {
    const leftClickMethod = Client.getMinecraft().getClass().getDeclaredMethod("func_147116_af", null)
    leftClickMethod.setAccessible(true)
    leftClickMethod.invoke(Client.getMinecraft(), null)
}

export function closeWindow(windowId) { Client.sendPacket(new C0DPacketCloseWindow(windowId)) }

export const sendWindowClick = (windowId, slot, clickType, actionNumber=0) => 
    Client.sendPacket(new C0EPacketClickWindow(windowId ?? Player.getContainer().getWindowId(), slot, clickType ?? 0, 0, null, actionNumber))

export const interactAt = (x,y,z) => {
    [x, z] = unFakepixelise(x, z)
    Client.getMinecraft().field_71442_b.func_178890_a(
        Player.getPlayer(), 
        World.getWorld(), 
        Client.getMinecraft().field_71439_g.field_71071_by.func_70448_g(), 
        new BlockPosFix(x, y, z), 
        EnumFacing.func_176733_a(Client.getMinecraft().field_71439_g.field_70177_z), 
        new Vec3(0.0, 0.0, 0.0)
    )
}

export const interactAtRelative = (x=0,y=0,z=0) => {
    x = Math.floor(Player.getX()) + x
    y = Math.floor(Player.getY()) + y
    z = Math.floor(Player.getZ()) + z
    
    //ChatLib.chat(x + " " + y + " " + z)

    Client.getMinecraft().field_71442_b.func_178890_a(
        Player.getPlayer(), 
        World.getWorld(), 
        Client.getMinecraft().field_71439_g.field_71071_by.func_70448_g(), 
        new BlockPosFix(x, y, z), 
        EnumFacing.func_176733_a(Client.getMinecraft().field_71439_g.field_70177_z), 
        new Vec3(0.0, 0.0, 0.0)
    )
}

export function isPlayerAt(location) {
    if (!World.isLoaded()) return false
    return TabList.getNames().some((l) => 
        {
            return l.removeFormatting().toLowerCase().includes(location.toLowerCase());
        }
    )
}

export function inDungeon() {
    return isPlayerAt("Catacombs")
}

export function isBlockAtY(y, block) { 
    return String(World.getBlockAt(Math.floor(Player.getX()), Player.getY() + y, Math.floor(Player.getZ())).getState()).includes(block) 
}

export function isBlockAt(x, y, z, block) { 
    [x, z] = unFakepixelise(x, z)
    return String(World.getBlockAt(Math.floor(Player.getX()) + x, Player.getY() + y, Math.floor(Player.getZ() + z)).getState()).includes(block)
}

export function isStateAt(x, y, z, state) {
    [x, z] = unFakepixelise(x, z)
    return String(World.getBlockAt(new BlockPos(x,y,z)).getState()).includes(state)
}

export function isAt(x,y,z) {
    [x, z] = unFakepixelise(x, z)
    return (x == Math.floor(Player.getX()) && y == Math.floor(Player.getY()) && z == Math.floor(Player.getZ()))
}

export function isCloseTo(x,y,z,d=5) {
    [x, z] = unFakepixelise(x, z)
    return (Math.abs(Player.getX() - x) < d && Math.abs(Player.getY() - y) < d && Math.abs(Player.getZ() - z) < d)
}


//
// world
//
export function renderCord(location, rgb = [1, 1, 1], alpha = 0.3, full = true) {
    const color = rgb.map((c) => (c > 1 ? c / 255 : c))
    const a = alpha > 1 ? alpha / 255 : alpha

    const [x, y, z] = [location[0] + 0.5, location[1], location[2] + 0.5]
    if (!full) RenderLib.drawEspBox(x, y, z, 1, 1, color[0], color[1], color[2], a, true)
    else RenderLib.drawInnerEspBox(x, y, z, 1, 1, color[0], color[1], color[2], a, true)
}

export function drawEspBox(x,y,z,w,h,r,g,b,a,p) {
    [x, z] = unFakepixelise(x, z)
    RenderLib.drawEspBox(x,y,z,w,h,r,g,b,a,p)
}

export function setToAir(x, y, z) { 
    if (!World.isLoaded()) return
    [x, z] = unFakepixelise(x, z)

    const pos = new BlockPos(x * 1, y * 1, z * 1)
    Client.getMinecraft().func_71410_x().field_71441_e.func_175698_g(pos.toMCBlock())
}

export function setToAirOld(x, y, z) { 
    if (!World.isLoaded()) return

    const pos = new BlockPos(x * 1, y * 1, z * 1)
    Client.getMinecraft().func_71410_x().field_71441_e.func_175698_g(pos.toMCBlock())
}


export function setRayToAir() {
    if (Player?.lookingAt()?.toString().includes('minecraft:air') || 
        Player?.lookingAt()?.toString().includes('minecraft:chest') || 
        Player?.lookingAt()?.toString().includes('minecraft:trapped_chest') || 
        Player?.lookingAt()?.toString().includes('minecraft:lever') || 
        Player?.lookingAt()?.toString().includes('minecraft:stone_button') || 
        Player?.lookingAt()?.toString().includes('minecraft:skull')) return
    
    setToAirOld(Player?.lookingAt()?.getX(), Player?.lookingAt()?.getY(), Player?.lookingAt()?.getZ())
}

export function setBlockAt(x, y, z, id) {
    [x, z] = unFakepixelise(x, z)

    const world = World.getWorld()
    const blockPos = getBlockPosFloor(x,y,z).toMCBlock()
    world.func_175656_a(blockPos, MCBlock.func_176220_d(id))
    world.func_175689_h(blockPos)
}

export function setBlockRelative(x,y,z,id=95) {
    setBlockAt(Player.getX() + x, Player.getY() + y, Player.getZ() + z, id)
}

export function getBlockPosFloor(x, y, z) {
	return new BlockPos(Math.floor(x), Math.floor(y), Math.floor(z))
}

export function drawTitle(title) {
    const [ x, y ] = [
        Renderer.screen.getWidth() / 2,
        Renderer.screen.getHeight() / 2
    ]

    Renderer.translate(x, y)
    Renderer.scale(4, 4)
    Renderer.drawStringWithShadow(title, -(Renderer.getStringWidth(title) / 2), -30)
}

export function drawSubTitle(subtitle) {
    const [ x, y ] = [
        Renderer.screen.getWidth() / 2,
        Renderer.screen.getHeight() / 2
    ]

    Renderer.translate(x, y)
    Renderer.scale(2, 2)
    Renderer.drawStringWithShadow(subtitle, -(Renderer.getStringWidth(subtitle) / 2), -15)


}

// misc
register("packetReceived", (packet) => {
    if (packet.func_179841_c() === 2) return
	const message = ChatLib.removeFormatting(packet.func_148915_c().func_150260_c())

    if (message === "[BOSS] Goldor: Who dares trespass into my domain?") isP3 = true
    if (message === "The Core entrance is opening!") isP3 = false
    if (message === "[BOSS] Maxor: WELL WELL WELL LOOK WHO'S HERE!") isF7 = true
}).setFilteredClass(S02PacketChat)


register("worldUnload", () => {
    isF7 = false
    isP3 = false
})

export function inF7() { return isF7 && inDungeon() }
export function inP3() { return isP3 && inDungeon() }

// return isF7 && inDungeon()