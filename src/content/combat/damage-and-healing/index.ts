import hitPoints from "./hit-points.md"
import damageRolls from "./damage-rolls.md"
import criticalHits from "./critical-hits.md"
import damageTypes from "./damage-types.md"
import damageResistanceAndVulnerability from "./damage-resistance-and-vulnerability.md"
import healing from "./healing.md"
import droppingToZeroHitPoints from "./dropping-to-zero-hit-points.md"
import knockingACreatureOut from "./knocking-a-creature-out.md"
import temporaryHitPoints from "./temporary-hit-points.md"

const breadcrumbs = ["Combat", "Damage and Healing"]

const damageAndHealing = [
  { title: "Hit Points", content: hitPoints, breadcrumbs},
  { title: "Damage Rolls", content: damageRolls, breadcrumbs },
  { title: "Critical Hits", content: criticalHits, breadcrumbs },
  { title: "Damage Types", content: damageTypes, breadcrumbs },
  { title: "Damage Resistance and Vulnerability", content: damageResistanceAndVulnerability, breadcrumbs },
  { title: "Healing", content: healing, breadcrumbs },
  { title: "Dropping to 0 Hit Points", content: droppingToZeroHitPoints, breadcrumbs },
  { title: "Knocking a Creature Out", content: knockingACreatureOut, breadcrumbs },
  { title: "Temporary Hit Points", content: temporaryHitPoints, breadcrumbs },
]

export default damageAndHealing
