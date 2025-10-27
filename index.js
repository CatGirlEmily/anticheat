import Settings from "./config"
import "./utils"

import "./impl/force/gamemode"
import "./impl/force/timer"
import "./impl/force/fly"
import "./impl/force/jump"
import "./impl/force/shorts"
import "./impl/force/autoconfirm"
import "./impl/force/api"


import "./impl/general/speed"
import "./impl/general/noVelocity"
import "./impl/general/noFallDamage"
import "./impl/general/autoLogIn"
import "./impl/general/hideUseless"

import "./impl/dungeon/skipTrap"
import "./impl/dungeon/witherKey"
import "./impl/dungeon/ghostPick"

import "./impl/f7/crystals"
import "./impl/f7/ghostBlocksF7"
import "./impl/f7/autoClip"
import "./impl/f7/crushCommand"
import "./impl/f7/earlyEntry"
import "./impl/f7/autoLevers"
import "./impl/f7/coreClip"
import "./impl/f7/splits"
import "./impl/f7/posmes"

import "./impl/mining/noDelay"
import "./impl/mining/ihaitecarpets"

import "./impl/render/itemdrops"
import "./impl/render/hideCoins"
import "./impl/render/hideDungeon"
import "./impl/render/renderNothing"

import "./impl/macro/auto_forge"
import "./impl/macro/recombinhand"

import "./test"


register("command", () => Settings.openGUI()).setName("ac", true).setAliases("anticheat")