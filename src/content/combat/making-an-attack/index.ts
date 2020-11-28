import attackRolls from "./attack-rolls.md"
import unseenAttackersAndTargets from "./unseen-attackers-and-targets.md"
import rangedAttacks from "./ranged-attacks.md"
import meleeAttacks from "./melee-attacks.md"
import opportunityAttacks from "./opportunity-attacks.md"
import twoWeaponFighting from "./two-weapon-fighting.md"
import grappling from "./grappling.md"
import shovingACreature from "./shoving-a-creature.md"

const breadcrumbs = ["Combat", "Making an Attack"]

const makingAnAttack = [
  { title: "Attack Rolls", content: attackRolls, breadcrumbs },
  { title: "Unseen Attackers and Targets", content: unseenAttackersAndTargets, breadcrumbs },
  { title: "Ranged Attacks", content: rangedAttacks, breadcrumbs },
  { title: "Melee Attacks", content: meleeAttacks, breadcrumbs },
  { title: "Opportunity Attacks", content: opportunityAttacks, breadcrumbs },
  { title: "Two Weapon Fighting", content: twoWeaponFighting, breadcrumbs },
  { title: "Grappling", content: grappling, breadcrumbs },
  { title: "Shoving a Creature", content: shovingACreature, breadcrumbs },
]

export default makingAnAttack
