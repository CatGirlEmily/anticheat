import { inF7, inP3, isCloseTo, isStateAt, interactAt, inDungeon} from "../../utils";
import Settings from "../../config"

let gate = 1

register("tick", () => {
    if (!Settings.autodev2) return
    if (!inF7()) return
    if (!isCloseTo(68, 133, 149, 3)) return

    if (isStateAt(70, 133, 150, "powered=false")) interactAt(70, 133, 150)
    if (isStateAt(70, 136, 150, "powered=false")) interactAt(70, 136, 150)
    if (isStateAt(68, 134, 150, "powered=false")) interactAt(68, 134, 150)
    if (isStateAt(68, 135, 150, "powered=false")) interactAt(68, 135, 150)
    if (isStateAt(66, 133, 150, "powered=false")) interactAt(66, 133, 150)
    if (isStateAt(66, 136, 150, "powered=false")) interactAt(66, 136, 150)
})
