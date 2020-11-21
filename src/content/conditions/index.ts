import blinded from "./blinded.md"
import charmed from "./charmed.md"
import deafened from "./deafened.md"
import exhaustion from "./exhaustion.md"
import frightened from "./frightened.md"
import grappled from "./grappled.md"
import incapacitated from "./incapacitated.md"
import invisible from "./invisible.md"
import paralyzed from "./paralyzed.md"
import petrified from "./petrified.md"
import poisoned from "./poisoned.md"
import prone from "./prone.md"
import restrained from "./restrained.md"
import stunned from "./stunned.md"
import unconscious from "./unconscious.md"
import SearchResult from "../../models/searchResult"

const conditions: SearchResult[] = [
  { title: "Blinded", content: blinded },
  { title: "Charmed", content: charmed },
  { title: "Deafened", content: deafened },
  { title: "Exhaustion", content: exhaustion },
  { title: "Frightened", content: frightened },
  { title: "Grappled", content: grappled },
  { title: "Incapacitated", content: incapacitated },
  { title: "Invisible", content: invisible },
  { title: "Paralyzed", content: paralyzed },
  { title: "Petrified", content: petrified },
  { title: "Poisoned", content: poisoned },
  { title: "Prone", content: prone },
  { title: "Restrained", content: restrained },
  { title: "Stunned", content: stunned },
  { title: "Unconscious", content: unconscious }
]

export default conditions
