export const Items: import('../../../sim/dex-items').ModdedItemDataTable = {
	slowbronite: {
		inherit: true,
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.name || item.megaStone === source.baseSpecies.name) return false;
			return true;
		},
	},
	greninjite: {
		inherit: true,
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.name || item.megaStone === source.baseSpecies.name) return false;
			return true;
		},
	},
	mirrorherb: {
		inherit: true
	},
	powerherb: {
		inherit: true
	},
	airballoon: {
		inherit: true
	},
	loadeddice: {
		inherit: true
	},
	heatrock: {
		inherit: true
	},
	icyrock: {
		inherit: true
	},
	damprock: {
		inherit: true
	},
	smoothrock: {
		inherit: true
	},
	redcard: {
		inherit: true
	},
	roomservice: {
		inherit: true
	},
	abilityshield: {
		inherit: true
	},
	absorborb: {
		inherit: true
	},
	adrenalineorb: {
		inherit: true
	},
	aguavberry: {
		inherit: true
	},
	blacksludge: {
		inherit: true
	},
	blunderpolicy: {
		inherit: true
	},
	clearamulet: {
		inherit: true
	},
	covertcloak: {
		inherit: true
	},
	ejectbutton: {
		inherit: true
	},
	ejectpack: {
		inherit: true
	},
	electricseed: {
		inherit: true
	},
	figyberry: {
		inherit: true
	},
	grassyseed: {
		inherit: true
	},
	iapapaberry: {
		inherit: true
	},
	ironball: {
		inherit: true
	},
	laggingtail: {
		inherit: true
	},
	leppaberry: {
		inherit: true
	},
	lightclay: {
		inherit: true
	},
	luminousmoss: {
		inherit: true
	},
	mentalherb: {
		inherit: true
	},
	metronome: {
		inherit: true
	},
	magoberry: {
		inherit: true
	},
	nanabberry: {
		inherit: true
	},
	protectivepads: {
		inherit: true
	},
	punchingglove: {
		inherit: true
	},
	safetygoggles: {
		inherit: true
	},
	salacberry: {
		inherit: true
	},
	shedshell: {
		inherit: true
	},
	brightpowder: {
		inherit: true
	},
	starfberry: {
		inherit: true
	},
	toxicorb: {
		inherit: true
	},
	throatspray: {
		inherit: true
	},
	toxicplate: {
		inherit: true
	},
	utilityumbrella: {
		inherit: true
	},
	wikiberry: {
		inherit: true
	},
	widelens: {
		inherit: true
	},
	zapplate: {
		inherit: true
	},
	chesnaughtite: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	delphoxite: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	mewtwonitex: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	mewtwonitey: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	diancite: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	zygardite: {
		inherit: true,
		onTakeItem(item, source) {
			if ((source.baseSpecies.baseSpecies === 'Zygarde' && source.baseAbility === 'powerconstruct') ||
				source.baseSpecies.name === 'Zygarde-Mega') return false;
			return true;
		},
	},
};
