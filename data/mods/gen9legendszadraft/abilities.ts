export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
	acidreflux: {
		desc: "If this Pokemon is hit by a physical attack, poisons foe.",
		shortDesc: "If this Pokemon is hit by a physical attack, poisons foe.",
		onDamagingHit(damage, target, source, move) {
			if (move.category === 'Physical') {
				this.add('-activate', target, 'ability: Acid Reflux');
				source.trySetStatus('psn', target);
			}
		},
		flags: {},
		name: "Acid Reflux",
		rating: 3.5,
		num: 401,
	},
	lightningpulse: {
		desc: "Immune to ground type moves and electric moves are 1.3x power (Levitate + Transistor).",
		shortDesc: "Immune to ground type moves and electric moves are 1.3x power (Levitate + Transistor).",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Electric') {
				this.debug('Transistor boost');
				return this.chainModify([5325, 4096]);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Electric') {
				this.debug('Transistor boost');
				return this.chainModify([5325, 4096]);
			}
		},
		flags: {breakable: 1},
		name: "Lightning Pulse",
		rating: 4,
		num: 402,
	},
	witchsbroom: {
		desc: "Immune to Ground moves; resets ally stat changes (Levitate + Curious Medicine).",
		shortDesc: "Immune to Ground moves; resets ally stat changes (Levitate + Curious Medicine).",
		onStart(pokemon) {
			for (const ally of pokemon.adjacentAllies()) {
				ally.clearBoosts();
				this.add('-clearboost', ally, '[from] ability: Witch\'s Broom', `[of] ${pokemon}`);
			}
		},
		flags: {breakable: 1},
		name: "Witch's Broom",
		rating: 4,
		num: 403,
	},
	barbedarmor: {
		desc: "Foes making contact lose 1/8 max HP; cannot be crit (Iron Barbs + Shell Armor).",
		shortDesc: "Foes making contact lose 1/8 max HP; cannot be crit (Iron Barbs + Shell Armor).",
		onCriticalHit: false,
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target, true)) {
				this.damage(source.baseMaxhp / 8, source, target);
			}
		},
		flags: {breakable: 1},
		name: "Barbed Armor",
		rating: 4,
		num: 405,
	},
	warlock: {
		desc: "This Pokémon’s attacks never make contact; no move recoil (Long Reach + Rock Head).",
		shortDesc: "This Pokémon’s attacks never make contact; no move recoil (Long Reach + Rock Head).",
		onDamage(damage, target, source, effect) {
			if (effect.id === 'recoil') {
				if (!this.activeMove) throw new Error("Battle.activeMove is null");
				if (this.activeMove.id !== 'struggle') return null;
			}
		},
		onModifyMove(move) {
			delete move.flags['contact'];
		},
		flags: {},
		name: "Warlock",
		rating: 3,
		num: 406,
	 },
	 spiritabsorb: {
		desc: "This Pokemon heals 1/4th of its max HP when hit by Ghost moves; Ghost immunity.",
		shortDesc: "This Pokemon heals 1/4th of its max HP when hit by Ghost moves; Ghost immunity.",
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Ghost') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Spirit Absorb');
				}
				return null;
			}
		},
		flags: { breakable: 1 },
		name: "Spirit Absorb",
		rating: 4.5,
		num: 407,
	 },
	 solarshield: {
		desc: "If Sunny Day is active, this Pokemon takes 0.67x damage from all direct attacks.",
		shortDesc: "If Sunny Day is active, this Pokemon takes 0.67x damage from all direct attacks.",
		onSourceModifyDamage(damage, source, target, move) {
			if (['sunnyday', 'desolateland'].includes(target.effectiveWeather())) {
				this.debug('Solar Shield weaken');
				return this.chainModify(0.67);
			}
		},
		flags: { breakable: 1 },
		name: "Solar Shield",
		rating: 3.5,
		num: 408,
	 },
	 lethalsuppression: {
		desc: "If this Pokemon hits a foe with a Poison move, the target's Ability is removed.",
		shortDesc: "If this Pokemon hits a foe with a Poison move, the target's Ability is removed.",
		onSourceDamagingHit(damage, target, source, move) {
			// Despite not being a secondary, Shield Dust / Covert Cloak block Toxic Chain's effect
			if (target.hasAbility('shielddust') || target.hasItem('covertcloak')) return;

			if (move.type === 'Poison') {
				if (target.getAbility().flags['cantsuppress']) return;
				target.addVolatile('gastroacid');
			}
		},
		flags:{},
		name: "Lethal Suppression",
		rating: 3,
		num:411,
	 },
	 sharpdebris: {
		desc: "If this Pokemon is hit by a physical attack Sharp Steel are set on the foe's side.",
		shortDesc: "If this Pokemon is hit by a physical attack, Sharp Steel are set on the foe's side.",
		onDamagingHit(damage, target, source, move) {
			const side = source.isAlly(target) ? source.side.foe : source.side;
						
			if (move.category === 'Physical') {
				this.add('-activate', target, 'ability: Sharp Debris');
				side.addSideCondition('gmaxsteelsurge', target);
				const steelHazard = this.dex.getActiveMove('Stealth Rock');
				steelHazard.type = 'Steel';
			}
		},
		flags:{},
		name: "Sharp Debris",
		rating: 3,
		num:412,
	 },
	 mindcontrol: {
		desc: "If this Pokemon hits a foe with a special move, the foe will become confused.",
		shortDesc: "If this Pokemon hits a foe with a special move, the foe will become confused.",
		onSourceDamagingHit(damage, target, source, move) {
			// Despite not being a secondary, Shield Dust / Covert Cloak block Toxic Chain's effect
			if (target.hasAbility('shielddust') || target.hasItem('covertcloak')) return;
			if (move.category === 'Special')
				target.addVolatile('confusion');
		},
		flags:{},
		name: "Mind Control",
		rating:3,
		num:413,
	 },
	 stormabsorb: {
		desc: "Water and Electric moves boost Sp. Atk by 1; immune to both (No Redirection).",
		shortDesc: "Water and Electric moves boost Sp. Atk by 1; immune to both (No Redirection).",
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.boost({ spa: 1 })) {
					this.add('-immune', target, '[from] ability: Storm Absorb');
				}
				return null;
			}
			if (target !== source && move.type === 'Electric') {
				if (!this.boost({ spa: 1 })) {
					this.add('-immune', target, '[from] ability: Storm Absorb');
				}
				return null;
			}
		},
		flags: { breakable: 1 },
		name: "Storm Absorb",
		rating: 4,
		num: 409,
	 },
	 chillingaura:{
		desc: "While this Pokemon is active, an Ice move used by any Pokemon has 1.33x power.",
		shortDesc: "While this Pokemon is active, an Ice move used by any Pokemon has 1.33x power.",
		onStart(pokemon) {
			if (this.suppressingAbility(pokemon)) return;
			this.add('-ability', pokemon, 'Chilling Aura');
		},
		onAnyBasePowerPriority: 20,
		onAnyBasePower(basePower, source, target, move) {
			if (target === source || move.category === 'Status' || move.type !== 'Ice') return;
			if (!move.auraBooster?.hasAbility('Chilling Aura')) move.auraBooster = this.effectState.target;
			if (move.auraBooster !== this.effectState.target) return;
			return this.chainModify([move.hasAuraBreak ? 3072 : 5448, 4096]);
		},
		flags: { },
		name: "Chilling Aura",
		rating: 4,
		num: 410,
	 },
	 eternallight: {
		desc: "Every Pokemon on the field except Mega Floette loses 1/10th of its max HP every turn.",
		shortDesc: "Every Pokemon on the field except Mega Floette loses 1/10th of its max HP every turn.",
		onResidualOrder: 5,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (!pokemon.hp) return;
			const allActives = this.sides.flatMap(side => side.active);
			for (const target of allActives) {
				if (!target.hp || target.species.id === 'floettemega') continue;
				this.damage(target.baseMaxhp / 10, target, pokemon);
			}
		},
		flags: { },
		name: "Eternal Light",
		rating: 4,
		num: 414,
	}
}
