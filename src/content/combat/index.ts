import theOrderOfCombat from './the-order-of-combat'
import movementAndPosition from './movement-and-position'
import actions from './actions'
import makingAnAttack from './making-an-attack'
import cover from "./cover"
import damageAndHealing from './damage-and-healing'
import mountedCombat from './mounted-combat'
import underwaterCombat from './underwater-combat'

export default [
  ...theOrderOfCombat,
  ...movementAndPosition,
  ...actions,
  ...makingAnAttack,
  ...cover,
  ...damageAndHealing,
  ...mountedCombat,
  ...underwaterCombat
]
