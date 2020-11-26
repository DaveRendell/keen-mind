import SearchResult from "../../../models/searchResult"
import attack from "./attack.md"
import castASpell from "./cast-a-spell.md"
import dash from "./dash.md"
import disengage from "./disengage.md"
import dodge from "./dodge.md"
import help from "./help.md"
import hide from "./hide.md"
import ready from "./ready.md"
import search from "./search.md"
import useAnObject from "./use-an-object.md"

const breadcrumbs = ["Combat", "Actions"]

const actions: SearchResult[] = [
  { title: "Attack", content: attack, breadcrumbs },
  { title: "Cast a Spell", content: castASpell, breadcrumbs },
  { title: "Dash", content: dash, breadcrumbs },
  { title: "Disengage", content: disengage, breadcrumbs },
  { title: "Dodge", content: dodge, breadcrumbs },
  { title: "Help", content: help, breadcrumbs },
  { title: "Hide", content: hide, breadcrumbs },
  { title: "Ready", content: ready, breadcrumbs },
  { title: "Search", content: search, breadcrumbs },
  { title: "Use and Object", content: useAnObject, breadcrumbs },
]

export default actions
