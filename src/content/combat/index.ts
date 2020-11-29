import theOrderOfCombat from './the-order-of-combat'
import movementAndPosition from './movement-and-position'
import actions from './actions'
import makingAnAttack from './making-an-attack'
import cover from "./cover"
import damageAndHealing from './damage-and-healing'

export default [
  ...theOrderOfCombat,
  ...movementAndPosition,
  ...actions,
  ...makingAnAttack,
  ...cover,
  ...damageAndHealing
]
