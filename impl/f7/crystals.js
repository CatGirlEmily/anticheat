import { inF7, isAt, clipY, setBlockRelative, setAngle, rightClick, motionForward, clip, centerPlayer, setMotion, inDungeon } from "../../utils"

side = 0

register("tick", () => {
    if (!inF7()) return
    if (!Player.isSneaking()) return
    if (isAt(87, 221, 60) || isAt(75, 221, 60)) {
        clipY(10)
        setBlockRelative(0, -1, 0, 95)

        Client.scheduleTask(1, () => {
            clipY(7)
            setBlockRelative(0, -1, 0, 95)
            setBlockRelative(0, -1, -1, 95)})
        
        Client.scheduleTask(2, () => {
            lookAtCrystal()
            clip(0, 0, -1) })
        Client.scheduleTask(3, () => {
            rightClick()
            centerPlayer()
            })
        Client.scheduleTask(4, () => clip(0,0,-10))
        Client.scheduleTask(5, () => clip(10*side,0,0))
        Client.scheduleTask(6, () => {
            clip(3*side,-5,0)
            setMotion(0, -3, 0)})
        Client.scheduleTask(7, () => setAngle(-90*side, 0))
        Client.scheduleTask(9, () => rightClick())
        Client.scheduleTask(10, () => {
            setAngle(90*side, 0)
            motionForward(3.2,0.1)})
        
    }
})

function lookAtCrystal() {
    if (isAt(87,238,60)) { setAngle(-120, 0); side = 1 }
    if (isAt(75,238,60)) { setAngle(120, 0); side = -1 }
}
