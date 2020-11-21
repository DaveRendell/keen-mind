import SearchResult from "./models/searchResult";
import Fuse from "fuse.js"

const fuseOptions = {
  keys: [
    "title"
  ]
}

const conditions = [
  { title: "Restrained" },
  { title: "Grappled" },
  { title: "Stunned" }
]

export default function search(query: string): SearchResult[] {
  const fuse = new Fuse(conditions, fuseOptions)
  return fuse.search(query).map(fuseResult => fuseResult.item)
}
