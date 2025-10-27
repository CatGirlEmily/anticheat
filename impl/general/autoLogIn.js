import { napisz } from "../../utils"
import Settings from "../../config"

register("chat", () => {
    if (!Settings.autologin) return
    ChatLib.command("login " + Settings.password)
}).setCriteria("Use - /login <your password>")

register("chat", () => {
    if (!Settings.autologin) return
    napisz("INCORRECT PASSWORD, PLEASE CHANGE IT IN /AC")
    Settings.autologin = false
}).setCriteria("Your password is incorrect!")