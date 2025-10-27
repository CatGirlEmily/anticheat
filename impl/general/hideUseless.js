import Settings from "../../config"

const uselessMsgs = [
    /\[NPC\] Mort: .+/,
    /Your .+ stats are doubled because you are the only player using this class!/,
    /This ability is on cooldown for .+/,
    /Your Bone Plating reduced damage by .+/,
    /ESSENCE! .+ found .+ Essence!/,
    /This lever has already been used./,
    /You hear the sound of something opening.../,
    /This chest has already been searched!/,
    /A Blessing of .+ was picked up!/,
    /Granted you.+/,
    /PUZZLE SOLVED!.+/,
    /DUNGEON BUFF! .+/,
    /A Crypt Wither Skull exploded, hitting you for .+ damage./,
    /The .+ Trap hit you for .+ damage!/,
    /You are playing on profile: .+/,
    /Welcome to Fakepixel SkyBlock!/,
    /Sending to .+/,
    /20% experience multiplier is currently enabled!/,
    /.+10 Magic Find Bonus!/,
    /Welcome to Fakepixel SkyBlock Sandbox!/,
    /A shiver runs down your spine.../,
    /Storm's Static Field struck you for +./,
    /Putting coins in escrow.../,
    /Processing purchase.../,
    /.+ has obtained Superboom TNT!/,
    /.+ Wither Skull hit you for .+ damage./,
    /GOOD CATCH! .+/,
    /You've stumbled upon a Sea Guardian./,
    /It looks like you've disrupted the Sea Witch's brewing session. Watch out, she's furious!/,
    /The Rider of The Deep emerges from the dark depths.../,
    /A Squid appeared./,
    /Gross! A Sea Leech!/,
    /You reeled in a Sea Archer./,
    /From the depth of the waters, you've reeled in a Sea Walker./,
    /HOPPITY'S HUNT A Chocolate Breakfast Egg has appeared!/,
    /Goldor's Great Sword hit you for .+/,
    /Processing bid.../,
    /.+ FIRE SALE.+/,
    /☕.+/,
    /.+ player is streaming on the server.+/,
    /.+ Milestone .+: You have dealt .+ Total Damage so far! .+/

]
register("chat", (event) => {
    if (!Settings.hideSpam) return
    const msg = ChatLib.getChatMessage(event);
    if (uselessMsgs.some(regex => regex.test(msg))) {
        cancel(event);
    }
});
