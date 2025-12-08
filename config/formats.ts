// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: import('../sim/dex-formats').FormatList = [
	{
		section: 'Currently Supported'
	},
	{
		name: "[Gen 9] OU",
		mod: 'gen9',
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Sleep Moves Clause', '!Sleep Clause Mod'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail'],
	},
	{
		name: "[Gen 9] Legends Z-A Draft",
		mod: 'gen9legendszadraft',
		gameType: 'doubles',
		bestOfDefault: true,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3772808/">Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/10749086">List of Changes</a>`,
		],
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'VGC Timer', 'Terastal Clause', 'NatDex Mod'],
		banlist: ['Moody', 'Hail', 'Hidden Power', 'Berserk Gene', 'Battle Bond'],
		unbanlist: ['Drought', 'Barbed Armor', 'Lightning Pulse'],
		onValidateSet(set, format, setHas, teamHas) {
			const species = this.dex.species.get(set.species);
			if (set.moves.map(x => this.toID(this.dex.moves.get(x).realMove) || x).includes('hiddenpower') &&
				species.baseSpecies !== 'Unown' && !this.ruleTable.has(`+move:hiddenpower`)) {
				return [`Hidden Power is banned.`];
			}
			if (set.moves.map(x => this.toID(this.dex.moves.get(x).realMove) || x).includes('fissure') &&
				(species.baseSpecies === 'Machop' || species.baseSpecies === 'Machoke' || species.baseSpecies === 'Machamp') && !this.ruleTable.has(`+move:fissure`)) {
				return [`Fissure is banned for the Machop line.`];
			}
		},
	},
	{
		section: "National Dex",
	},
	{
		name: "[Gen 9] National Dex",
		mod: 'gen9',
		ruleset: ['Standard NatDex', 'Terastal Clause'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock',
			'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
	}
];
