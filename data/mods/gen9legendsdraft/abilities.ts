export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
		// Draft League Custom
	acidreflux: {
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
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Poison') {
				if (attacker.getAbility().flags['cantsuppress']) return;
				if (attacker.newlySwitched || this.queue.willMove(attacker)) return;
				attacker.addVolatile('gastroacid');
			}
		},
		flags:{},
		name: "Lethal Suppression",
		rating: 3,
		num:411,
	 },

	 sharpdebris: {
		onDamagingHit(damage, target, source, move) {
			const side = source.isAlly(target) ? source.side.foe : source.side;
						
			if (move.category === 'Physical') {
				this.add('-activate', target, 'ability: Sharp Debris');
				side.addSideCondition('toxicspikes', target);
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
	 ange: {
		onResidualOrder: 5,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (!pokemon.hp) return;
			const megaFoes = [];
			for (const target of pokemon.foes()) {
				if (target.baseSpecies.isMega) megaFoes.push(target);
			}
			if (megaFoes.length) {
				for (const target of megaFoes) {
					this.damage(target.baseMaxhp / 10, target, pokemon);
					this.heal(target.baseMaxhp / 10);
				}
			} else {
				this.heal(pokemon.baseMaxhp / 12);
			}
		},
		name: "Ange",
	},
	}