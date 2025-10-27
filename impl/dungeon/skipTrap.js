

import { getAdjustment } from "../../../fishaddons/util/utils"
import Settings from "../../config"
import { C03PacketPlayer, C02PacketUseEntity, EntityBat, isBlockAtY, isBlockAt, clipY, clip, setMotion, setBlockAt, setAngle, centerPlayer, rightClick, setBlockRelative, resetMotion, setRayToAir, inDungeon, interactAtRelative, drawTitle, drawSubTitle} from "../../utils"

let alertStamp = null

function direction() {
    if (isBlockAt(1,0,0,"mossy_stonebrick")) return [1,0]
    if (isBlockAt(-1,0,0,"mossy_stonebrick")) return [-1,0]
    if (isBlockAt(0,0,1,"mossy_stonebrick")) return [0, 1]
    if (isBlockAt(0,0,-1,"mossy_stonebrick")) return [0,-1]
}

const notsuccers = register("renderOverlay", () => {
    if (alertStamp === null) alertStamp = Date.now()
    
    drawTitle("&4BAT SKIPPED")


    if ((Date.now() - alertStamp) > 3000) {
        alertStamp = null
        notsuccers.unregister()
    }
}).unregister()

const waiting = register("renderOverlay", () => {
    drawSubTitle("&bwaiting for pistons...") 
}).unregister()

const exit = register("tick", () => {
    waiting.register()

    if (isBlockAt(x*-3, 0, z*-3, "smooth_granite")) return
    Client.scheduleTask(1, () => clip(x*-9,0,z*-9))
    Client.scheduleTask(2, () => clip(x*-10,0,z*-10))
    exit.unregister()
    waiting.unregister()
}).unregister()


register("step", () => {
    if (!inDungeon()) return
    if (!Settings.trapSkip) return
    if (!Player.isSneaking()) return
    let dir = direction()
    if (!dir) return
    [x, z] = dir

    if (
        isBlockAtY(-1, "andesite") &&
        isBlockAtY(10, "cobblestone") &&
        isBlockAtY(11, "andesite")
    ) {
        centerPlayer()
        clipY(8)
        Client.scheduleTask(1, () => clipY(5))
        Client.scheduleTask(2, () => {
            clip(z * -1, 0, x * 1)
            clip(x*5,0,z*5) })
        Client.scheduleTask(3, () => centerPlayer())
        Client.scheduleTask(4, () => {
            clipY(-9.5)
            setAngle(0, 90) })
        Client.scheduleTask(5, () => clipY(-3.1))
        Client.scheduleTask(7, () => rightClick())
        Client.scheduleTask(8, () => {
            clipY(3.2)
            setBlockRelative(0,-1,0,95)})
        Client.scheduleTask(9, () => {clipY(10)})
        Client.scheduleTask(10, () => clip(z*-1, 0, x * 1))
        Client.scheduleTask(11, () => clip(x*7,0,z*7))
        Client.scheduleTask(12, () => {
            interactAtRelative(x*-1+(z*-3), 0, z*-1+(x*3))
            clip(x*8,0,z*8)})
        Client.scheduleTask(13, () => clip(z * 8, 1, x * -8))
        Client.scheduleTask(14, () => {
            clip(z * 9, 4, x * -9)
            setBlockAt(Player.getX(), Player.getY() - 1, Player.getZ(), 95)
            lookAtChest()})
        Client.scheduleTask(15, () => clip(z * 5, 4, x * -5))
        Client.scheduleTask(16, () => clip(x* -4, 0, z*-4))
        Client.scheduleTask(17, () => clip(x* -5, 0, z*-5))
        Client.scheduleTask(24, () => rightClick())
        Client.scheduleTask(25, () => {
            clip(x* 7, 0, z*7)
            setBlockRelative(0,-1,0,95) })
        Client.scheduleTask(26, () => clip(z*-7, -2, x * 7))
        Client.scheduleTask(27, () => clip(x* -1, 1, z*-1))
        Client.scheduleTask(28, () => clip(z*-1, 0, x * 1))
        Client.scheduleTask(29, () => clip(x* -1, 1, z*-1))
        Client.scheduleTask(30, () => clip(x* -1, 1, z*-1))
        Client.scheduleTask(31, () => hit = hitBat())
        Client.scheduleTask(32, () => clip(x*1, -1, z*1))
        Client.scheduleTask(33, () => clip(x*1, -1, z*1))
        Client.scheduleTask(34, () => clip(z*1, 0, x *-1))
        Client.scheduleTask(35, () => clip(x* 1, -1, z*1))
        Client.scheduleTask(36, () => clipY(-9))
        Client.scheduleTask(37, () => {
            clip(z*-4, 0, x *4)
            setMotion(0, -5, 0)
            if (!hit) notsuccers.register()
        })

        Client.scheduleTask(40, () => {
            if (!isBlockAt(x*-3, 0, z*-3, "smooth_granite")) {
                Client.scheduleTask(1, () => clip(x*-9,0,z*-9))
                Client.scheduleTask(2, () => clip(x*-10,0,z*-10))
            } else {
                exit.register()
            }
        })
    }
}).setFps(10)


function lookAtChest() {
if (x === 1 && z === 0) setAngle(90, 0)
if (x === -1 && z === 0) setAngle(-90, 0)
if (x === 0 && z === 1) setAngle(180, 0)
if (x === 0 && z === -1) setAngle(0, 0) }

function hitBat() {
    target = null
    World.getAllEntitiesOfType(EntityBat).forEach(e => {
        let dist = e.distanceTo(Player.getX(), Player.getY(), Player.getZ());

        if (dist < 5) target = e
    })

    if (!target) return false


    const adjustment = getAdjustment(target.getX(), target.getY(), target.getZ());
    Client.sendPacket(new C03PacketPlayer.C05PacketPlayerLook(adjustment[0], adjustment[1], true));
    Client.sendPacket(new C02PacketUseEntity(target.getEntity(), C02PacketUseEntity.Action.ATTACK));
    Client.getMinecraft().field_71439_g.func_71038_i();
    return true
}

// TEST AND FINISH BAT