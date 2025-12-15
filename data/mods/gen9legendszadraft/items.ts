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
		inherit: true,
		isNonstandard: "Custom",
	},
	powerherb: {
		inherit: true,
		isNonstandard: "Custom",
	},
	airballoon: {
		inherit: true,
		isNonstandard: "Custom",
	},
	loadeddice: {
		inherit: true,
		isNonstandard: "Custom",
	},
	heatrock: {
		inherit: true,
		isNonstandard: "Custom",
	},
	icyrock: {
		inherit: true,
		isNonstandard: "Custom",
	},
	damprock: {
		inherit: true,
		isNonstandard: "Custom",
	},
	smoothrock: {
		inherit: true,
		isNonstandard: "Custom",
	},
	redcard: {
		inherit: true,
		isNonstandard: "Custom",
	},
	roomservice: {
		inherit: true,
		isNonstandard: "Custom",
	},
	abilityshield: {
		inherit: true,
		isNonstandard: "Custom",
	},
	absorborb: {
		inherit: true,
		isNonstandard: "Custom",
	},
	adrenalineorb: {
		inherit: true,
		isNonstandard: "Custom",
	},
	aguavberry: {
		inherit: true,
		isNonstandard: "Custom",
	},
	blacksludge: {
		inherit: true,
		isNonstandard: "Custom",
	},
	blunderpolicy: {
		inherit: true,
		isNonstandard: "Custom",
	},
	clearamulet: {
		inherit: true,
		isNonstandard: "Custom",
	},
	covertcloak: {
		inherit: true,
		isNonstandard: "Custom",
	},
	ejectbutton: {
		inherit: true,
		isNonstandard: "Custom",
	},
	ejectpack: {
		inherit: true,
		isNonstandard: "Custom",
	},
	electricseed: {
		inherit: true,
		isNonstandard: "Custom",
	},
	figyberry: {
		inherit: true,
		isNonstandard: "Custom",
	},
	grassyseed: {
		inherit: true,
		isNonstandard: "Custom",
	},
	iapapaberry: {
		inherit: true,
		isNonstandard: "Custom",
	},
	ironball: {
		inherit: true,
		isNonstandard: "Custom",
	},
	laggingtail: {
		inherit: true,
		isNonstandard: "Custom",
	},
	leppaberry: {
		inherit: true,
		isNonstandard: "Custom",
	},
	lightclay: {
		inherit: true,
		isNonstandard: "Custom",
	},
	luminousmoss: {
		inherit: true,
		isNonstandard: "Custom",
	},
	mentalherb: {
		inherit: true,
		isNonstandard: "Custom",
	},
	metronome: {
		inherit: true,
		isNonstandard: "Custom",
	},
	magoberry: {
		inherit: true,
		isNonstandard: "Custom",
	},
	nanabberry: {
		inherit: true,
		isNonstandard: "Custom",
	},
	protectivepads: {
		inherit: true,
		isNonstandard: "Custom",
	},
	punchingglove: {
		inherit: true,
		isNonstandard: "Custom",
	},
	safetygoggles: {
		inherit: true,
		isNonstandard: "Custom",
	},
	salacberry: {
		inherit: true,
		isNonstandard: "Custom",
	},
	shedshell: {
		inherit: true,
		isNonstandard: "Custom",
	},
	brightpowder: {
		inherit: true,
		isNonstandard: "Custom",
	},
	starfberry: {
		inherit: true,
		isNonstandard: "Custom",
	},
	toxicorb: {
		inherit: true,
		isNonstandard: "Custom",
	},
	throatspray: {
		inherit: true,
		isNonstandard: "Custom",
	},
	toxicplate: {
		inherit: true,
		isNonstandard: "Custom",
	},
	utilityumbrella: {
		inherit: true,
		isNonstandard: "Custom",
	},
	wikiberry: {
		inherit: true,
		isNonstandard: "Custom",
	},
	widelens: {
		inherit: true,
		isNonstandard: "Custom",
	},
	zapplate: {
		inherit: true,
		isNonstandard: "Custom",
	},
	custapberry: {
		inherit: true,
		isNonstandard: "Custom",
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
	dracoplate: {
		inherit: true,
		isNonstandard: "Custom",
	},
	dreadplate: {
		inherit: true,
		isNonstandard: "Custom",
	},
	earthplate: {
		inherit: true,
		isNonstandard: "Custom",
	},
	fistplate: {
		inherit: true,
		isNonstandard: "Custom",
	},
	flameplate: {
		inherit: true,
		isNonstandard: "Custom",
	},
	fullincense: {
		inherit: true,
		isNonstandard: "Custom",
	},
	icicleplate: {
		inherit: true,
		isNonstandard: "Custom",
	},
	insectplate: {
		inherit: true,
		isNonstandard: "Custom",
	},
	ironplate: {
		inherit: true,
		isNonstandard: "Custom",
	},
	meadowplate: {
		inherit: true,
		isNonstandard: "Custom",
	},
	mindplate: {
		inherit: true,
		isNonstandard: "Custom",
	},
	mistyseed: {
		inherit: true,
		isNonstandard: "Custom",
	},
	pixieplate: {
		inherit: true,
		isNonstandard: "Custom",
	},
	psychicseed: {
		inherit: true,
		isNonstandard: "Custom",
	},
	rowapberry: {
		inherit: true,
		isNonstandard: "Custom",
	},
	skyplate: {
		inherit: true,
		isNonstandard: "Custom",
	},
	splashplate: {
		inherit: true,
		isNonstandard: "Custom",
	},
	spookyplate: {
		inherit: true,
		isNonstandard: "Custom",
	},
	stoneplate: {
		inherit: true,
		isNonstandard: "Custom",
	},
	terrainextender: {
		inherit: true,
		isNonstandard: "Custom",
	},
	zoomlens: {
		inherit: true,
		isNonstandard: "Custom",
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
