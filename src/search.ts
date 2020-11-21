import SearchResult from "./models/searchResult";
import Fuse from "fuse.js"

const fuseOptions = {
  keys: [
    "title"
  ]
}

const conditions: SearchResult[] = [
  {
    title: "Restrained",
    content: "* A restrained creature's speed becomes 0, and it can't benefit from any bonus to its speed.\n* Attack rolls against the creature have advantage, and the creature's attack rolls have disadvantage.\n* The creature has disadvantage on Dexterity saving throws."
  },
  {
    title: "Grappled",
    content: "* A grappled creature's speed becomes 0, and it can't benefit from any bonus to its speed.\n* The condition ends if the grappler is incapacitated (see the condition).\n* The condition also ends if an effect removes the grappled creature from the reach of the grappler or grappling effect, such as when a creature is hurled away by the *thunder-wave* spell."
  },
  {
    title: "Stunned",
    content: "* A stunned creature is incapacitated (see the condition), can't move, and can speak only falteringly.\n* The creature automatically fails Strength and Dexterity saving throws.\n* Attack rolls against the creature have advantage."
  },
  {
    title: "Exhaustion",
    content: "Some special abilities and environmental hazards, such as starvation and the long-term effects of freezing or scorching temperatures, can lead to a special condition called exhaustion. Exhaustion is measured in six levels. An effect can give a creature one or more levels of exhaustion, as specified in the effect's description.\n\n| Level | Effect                                         |\n|-------|------------------------------------------------|\n| 1     | Disadvantage on ability checks                 |\n| 2     | Speed halved                                   |\n| 3     | Disadvantage on attack rolls and saving throws |\n| 4     | Hit point maximum halved                       |\n| 5     | Speed reduced to 0                             |\n| 6     | Death                                          |\n\nIf an already exhausted creature suffers another effect that causes exhaustion, its current level of exhaustion increases by the amount specified in the effect's description.\n\nA creature suffers the effect of its current level of exhaustion as well as all lower levels. For example, a creature suffering level 2 exhaustion has its speed halved and has disadvantage on ability checks.\n\nAn effect that removes exhaustion reduces its level as specified in the effect's description, with all exhaustion effects ending if a creature's exhaustion level is reduced below 1.\n\nFinishing a long rest reduces a creature's exhaustion level by 1, provided that the creature has also ingested some food and drink."
  }
]

export default function search(query: string): SearchResult[] {
  const fuse = new Fuse(conditions, fuseOptions)
  return fuse.search(query).map(fuseResult => fuseResult.item)
}
