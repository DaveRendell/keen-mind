import SearchResult from "./models/searchResult";
import Fuse from "fuse.js"
import conditions from "./content/conditions"

const fuseOptions = {
  keys: [
    "title"
  ]
}

const data = [
  ...conditions
]

export default function search(query: string): SearchResult[] {
  const fuse = new Fuse(data, fuseOptions)
  return fuse.search(query).map(fuseResult => fuseResult.item)
}
