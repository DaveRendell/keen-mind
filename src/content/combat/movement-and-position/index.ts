import difficultTerrain from "./difficult-terrain.md"
import beingProne from "./being-prone.md"
import movingAroundOtherCreatures from "./moving-around-other-creatures.md"
import flyingMovement from "./flying-movement.md"
import creatureSize from "./creature-size.md"
import SearchResult from "../../../models/searchResult"

const breadcrumbs = ["Combat", "Movement and Position"]

const movementAndPosition: SearchResult[] = [
  { title: "Difficult Terrain", content: difficultTerrain, breadcrumbs },
  { title: "Being Prone", content: beingProne, breadcrumbs },
  { title: "Moving Around Other Creatures", content: movingAroundOtherCreatures, breadcrumbs },
  { title: "Flying Movement", content: flyingMovement, breadcrumbs },
  { title: "Creature Size", content: creatureSize, breadcrumbs },
]

export default movementAndPosition
