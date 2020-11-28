import theOrderOfCombat from './the-order-of-combat'
import movementAndPosition from './movement-and-position'
import actions from './actions'
import makingAnAttack from './making-an-attack'
import cover from "./cover"

export default [
  ...theOrderOfCombat,
  ...movementAndPosition,
  ...actions,
  ...makingAnAttack,
  ...cover
]
