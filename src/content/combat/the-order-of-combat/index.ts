import combatStepByStep from "./combat-step-by-step.md"
import surprise from "./surprise.md"
import initiative from "./initiative.md"
import yourTurn from "./your-turn.md"
import reactions from "./reactions.md"

const breadcrumbs = ["Combat", "The Order of Combat"]

const theOrderOfCombat = [
  { title: "Combat Step by Step", content: combatStepByStep, breadcrumbs },
  { title: "Surprise", content: surprise, breadcrumbs },
  { title: "Initiative", content: initiative, breadcrumbs },
  { title: "Your Turn", content: yourTurn, breadcrumbs },
  { title: "Reactions", content: reactions, breadcrumbs },
]

export default theOrderOfCombat
