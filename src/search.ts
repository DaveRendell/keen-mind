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
  }
]

export default function search(query: string): SearchResult[] {
  const fuse = new Fuse(conditions, fuseOptions)
  return fuse.search(query).map(fuseResult => fuseResult.item)
}
