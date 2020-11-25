import difficultTerrain from "./difficult-terrain.md"
import beingProne from "./being-prone.md"
import movingAroundOtherCreatures from "./moving-around-other-creatures.md"
import flyingMovement from "./flying-movement.md"
import creatureSize from "./creature-size.md"


import SearchResult from "../../../models/searchResult"

const movementAndPosition: SearchResult[] = [
  { title: "Difficult Terrain", content: difficultTerrain, breadcrumbs: ["Combat", "Movement and Position"] },
  { title: "Being Prone", content: beingProne, breadcrumbs: ["Combat", "Movement and Position"] },
  { title: "Moving Around Other Creatures", content: movingAroundOtherCreatures, breadcrumbs: ["Combat", "Movement and Position"] },
  { title: "Flying Movement", content: flyingMovement, breadcrumbs: ["Combat", "Movement and Position"] },
  { title: "Creature Size", content: creatureSize, breadcrumbs: ["Combat", "Movement and Position"] },
]

export default movementAndPosition
