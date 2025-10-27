import { @Vigilant, @TextProperty, @NumberProperty, @SwitchProperty, @SelectorProperty, @DecimalSliderProperty } from "../Vigilance";

@Vigilant("anticheat", "by javie", {
	getCategoryComparator: () => (a, b) => {
		const categories = ["General", "Dungeons", "F7", "Mining", "Render"];
		return categories.indexOf(a.name) - categories.indexOf(b.name);
	}
})
class Settings {
	@SwitchProperty({
    name: 'Auto Login',
    description: '',
    category: 'General',
    subcategory: 'General',
    })
    autologin = false;

    @TextProperty({
        name: 'Password',
        description: 'password that will be used to log in with',
        category: 'General',
        subcategory: 'General',
        protected: true,
    })
    password = '';

	@SwitchProperty({
	name: "No Knockback",
	description: "Completely negates any type of knockback velocity applied to the player.",
	category: "General",
    subcategory: "Movement"
	})
	noVelocity = false;

	@SelectorProperty({
    name: "➤ Force Lava Bounce",
    description: "Lava Bounce only works when you take damage from lava (so get knockback). 'Zero Ping' just sets player motion everytime they find themselves in the lava during F7, 'Toggle' temporarily toggles off the module while player is in the lava during f7. 'Idgaf' just doesnt give a fuck about lava.",
    category: "General",
    subcategory: "Movement",
    options: ["Zero Ping", "Toggle NK", "Idgaf"]
    })
    noVelocityType = 0;

	@SwitchProperty({
	name: "No Fall Damage",
	description: "When i started playing i noticed that godpots jump boost gives you falldamage ???",
	category: "General",
    subcategory: "Movement"
	})
	nofall = false;

	@SwitchProperty({
		name: "Speed Changer",
		description: "Allows you to change your movement speed (not timer)",
		category: "General",
        subcategory: "Movement"
	})
	customSpeed = false;

    @DecimalSliderProperty({
        name: "➤ Custom Speed",
        description: "",
        category: "General",
        subcategory: "Movement",
        minF: 1,
        maxF: 600,
        decimalPlaces: 0
    })
    customSpeedValue = 400;

	@SwitchProperty({
		name: "Hide Useless Messages",
		description: "hides all types of server messages that have no reason to be in the chat, aka spam.",
		category: "General",
        subcategory: "Chat"
	})
	hideSpam = false;

	@SwitchProperty({
	name: "Wither Key TP",
	description: "Attempts to teleport you to the wither/blood key once they drop. This works sometimes and I find it really nice, but wont work if key is at least 0.00001 into the block, or there are any block in the X/Z way. I personally recommend.",
	category: "Dungeons",
    subcategory: "General"
	})
	keysTp = false;

	@SwitchProperty({
	name: "Trap Skip",
	description: "100% traps in less than two seconds with no player input. to start macro, enter trap room, stand on the further andesite on the right side (this one block away from wall separating you from the chest), and shift.",
	category: "Dungeons",
    subcategory: "Puzzles"
	})
	trapSkip = false;

	@SwitchProperty({
	name: "Ghost Pickaxe",
	description: "Stonk works as ghost pickaxes for ALL blocks by default.",
	category: "Dungeons",
    subcategory: "Secrets"
	})
	ghostPick = false;

	
	@SwitchProperty({
	name: "Highlight Items",
	description: "highlights item secrets",
	category: "Dungeons",
    subcategory: "Secrets"
	})
	itemdrops = false;


	@SwitchProperty({
	name: "Split Timers",
	description: "Displays time taken for each boss phase.",
	category: "F7",
    subcategory: "General"
	})
	f7timers = false;

	@SwitchProperty({
	name: "Positional Messages",
	description: "Sends a message in the party chat once you reach certain location.",
	category: "F7",
    subcategory: "General"
	})
	posmes = false;
	
	@SwitchProperty({
	name: "Vertical Jerry",
	description: "Disables horizontal jerry-chine gun knockback allowing skill issued players to climb walls easily.",
	category: "F7",
    subcategory: "General"
	})
	jerry = false;

	@SwitchProperty({
	name: "Vertical Clip",
	description: "Allows you to clip in few places upon shifting in the area.",
	category: "F7",
    subcategory: "General"
	})
	vClip = false;
	
	@SwitchProperty({
	name: "➤ Vertical Clip ESP",
	description: "Renders boxes in preset clip areas.",
	category: "F7",
    subcategory: "General"
	})
	vClipEsp = false;
	
	@SwitchProperty({
	name: "➤ Render Through Walls",
	description: "Should areas be rendered through walls?",
	category: "F7",
    subcategory: "General"
	})
	vClipEspPhasing = false;


	@SwitchProperty({
	name: "Ghost Blocks",
	description: "some ghost blocks for p3, e.g. removing useless levers from 2nd dev",
	category: "F7",
    subcategory: "P3"
	})
	devGhostBlocks = false;

	@SwitchProperty({
	name: "Core Clip",
	description: "Allows you to walk through the gold blocks. skidded from soshimee cuz im lazy.",
	category: "F7",
    subcategory: "P3"
	})
	coreclip = false;

	@SwitchProperty({
	name: "Early Entry",
	description: "Really poor clip for P3 allowing you to skip the gate. Just go to the &2green&7 areas. No shifting required.",
	category: "F7",
    subcategory: "P3"
	})
	earlyEntry = false;
	
	@SwitchProperty({
	name: "➤ EE Clip ESP",
	description: "Renders where you shuold go to EE.",
	category: "F7",
    subcategory: "P3"
	})
	earlyEntryEsp = false;
	
	@SwitchProperty({
	name: "➤ Render Through Wallz",
	description: "Should areas be rendered through walls?",
	category: "F7",
    subcategory: "P3"
	})
	earlyEntryEspPhase = false;

	@SwitchProperty({
	name: "Levers",
	description: "automatically does levers once you get nearby",
	category: "F7",
    subcategory: "Devices"
	})
	autodev2 = false;

	@SwitchProperty({
	name: "No Delay",
	description: "Disables block breaking delay. If you want to see what exactly that is, go singleplayer, turn on creative and hold left click.",
	category: "Mining",
    subcategory: "General"
	})
	noDelay = false;

	@SwitchProperty({
	name: "I HATE CARPETS",
	description: "Sometimes helps, sometimes not. This feature was made mostly due to mining, and clearing in dungeons where carpets lag backed the player a lot.",
	category: "Mining",
    subcategory: "General"
	})
	ihatecarpets = false;



	@SwitchProperty({
	name: "Hide Coins",
	description: "Hides coins laying on the ground.",
	category: "Render",
    subcategory: "General"
	})
	hideCoins = false;


	@SwitchProperty({
	name: "Hide Mob Loot",
	description: "Hides mob armor & weapons drops.",
	category: "Render",
    subcategory: "Dungeons"
	})
	hideMobLoot = false;

	@SwitchProperty({
	name: "Hide SuperBoom TNT",
	description: "Hides superboom tnts when dropping with blessings.",
	category: "Render",
    subcategory: "Dungeons"
	})
	hideTnt = false;

	@SwitchProperty({
	name: "Hide Worthless Items",
	description: "Hides worthless shit from taking pixels on your screen.",
	category: "Render",
    subcategory: "Dungeons"
	})
	hideShit = false;

	@SwitchProperty({
	name: "Render NO ONE",
	description: "More of a joke but yeah, disables rendering of every entity and particle.",
	category: "Render",
    subcategory: "Other"
	})
	renderNothing = false;
	


	
	constructor() {
		this.initialize(this);

        this.addDependency("➤ Custom Speed", "Speed Changer")
		this.addDependency("➤ Force Lava Bounce", "No Knockback")
		
		this.addDependency("➤ Vertical Clip ESP", "Vertical Clip")
		this.addDependency("➤ Render Through Walls", "Vertical Clip")

		this.addDependency("➤ EE Clip ESP", "Early Entry")
		this.addDependency("➤ Render Through Wallz", "Early Entry")

		
		
	}
}

export default new Settings();