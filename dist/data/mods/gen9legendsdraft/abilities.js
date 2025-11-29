"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var abilities_exports = {};
__export(abilities_exports, {
  Abilities: () => Abilities
});
module.exports = __toCommonJS(abilities_exports);
const Abilities = {
  // Draft League Custom
  acidreflux: {
    onDamagingHit(damage, target, source, move) {
      if (move.category === "Physical") {
        this.add("-activate", target, "ability: Acid Reflux");
        source.trySetStatus("psn", target);
      }
    },
    flags: {},
    name: "Acid Reflux",
    rating: 3.5,
    num: 401
  },
  lightningpulse: {
    onStart(pokemon) {
      if (this.effectState.unnerved) return;
      this.add("-ability", pokemon, "Levitate");
    },
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Electric") {
        this.debug("Transistor boost");
        return this.chainModify([5325, 4096]);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Electric") {
        this.debug("Transistor boost");
        return this.chainModify([5325, 4096]);
      }
    },
    flags: { breakable: 1 },
    name: "Lightning Pulse",
    rating: 4,
    num: 402
  },
  witchsbroom: {
    onStart(pokemon) {
      for (const ally of pokemon.adjacentAllies()) {
        ally.clearBoosts();
        this.add("-clearboost", ally, "[from] ability: Witch's Broom", `[of] ${pokemon}`);
      }
    },
    flags: { breakable: 1 },
    name: "Witch's Broom",
    rating: 4,
    num: 403
  },
  barbedarmor: {
    onCriticalHit: false,
    onDamagingHitOrder: 1,
    onDamagingHit(damage, target, source, move) {
      if (this.checkMoveMakesContact(move, source, target, true)) {
        this.damage(source.baseMaxhp / 8, source, target);
      }
    },
    flags: { breakable: 1 },
    name: "Barbed Armor",
    rating: 4,
    num: 405
  },
  warlock: {
    onDamage(damage, target, source, effect) {
      if (effect.id === "recoil") {
        if (!this.activeMove) throw new Error("Battle.activeMove is null");
        if (this.activeMove.id !== "struggle") return null;
      }
    },
    onModifyMove(move) {
      delete move.flags["contact"];
    },
    flags: {},
    name: "Warlock",
    rating: 3,
    num: 406
  },
  spiritabsorb: {
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Ghost") {
        if (!this.heal(target.baseMaxhp / 4)) {
          this.add("-immune", target, "[from] ability: Spirit Absorb");
        }
        return null;
      }
    },
    flags: { breakable: 1 },
    name: "Spirit Absorb",
    rating: 4.5,
    num: 407
  },
  solarshield: {
    onSourceModifyDamage(damage, source, target, move) {
      if (["sunnyday", "desolateland"].includes(target.effectiveWeather())) {
        this.debug("Solar Shield weaken");
        return this.chainModify(0.67);
      }
    },
    flags: { breakable: 1 },
    name: "Solar Shield",
    rating: 3.5,
    num: 408
  },
  stormabsorb: {
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Water") {
        if (!this.boost({ spa: 1 })) {
          this.add("-immune", target, "[from] ability: Storm Absorb");
        }
      }
      if (target !== source && move.type === "Electric") {
        if (!this.boost({ spa: 1 })) {
          this.add("-immune", target, "[from] ability: Storm Absorb");
        }
        return null;
      }
    },
    flags: { breakable: 1 },
    name: "Storm Absorb",
    rating: 4,
    num: 409
  },
  chillingaura: {
    onStart(pokemon) {
      if (this.suppressingAbility(pokemon)) return;
      this.add("-ability", pokemon, "Chilling Aura");
    },
    onAnyBasePowerPriority: 20,
    onAnyBasePower(basePower, source, target, move) {
      if (target === source || move.category === "Status" || move.type !== "Ice") return;
      if (!move.auraBooster?.hasAbility("Chilling Aura")) move.auraBooster = this.effectState.target;
      if (move.auraBooster !== this.effectState.target) return;
      return this.chainModify([move.hasAuraBreak ? 3072 : 5448, 4096]);
    },
    flags: {},
    name: "Chilling Aura",
    rating: 4,
    num: 410
  }
};
//# sourceMappingURL=abilities.js.map
