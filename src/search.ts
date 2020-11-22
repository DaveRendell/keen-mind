import SearchResult from "./models/searchResult";
import Fuse from "fuse.js"
import conditions from "./content/conditions"

const defaultOptions = {
  keys: [
    "title"
  ]
}

const data = [
  ...conditions
]

const index = Fuse.createIndex(defaultOptions.keys, data)

export default function search(query: string): SearchResult[] {
  const options = {
    ...defaultOptions,
    // For single char searches, show matches, but for longer searches we
    // demand a minimum match length of 2 characters.
    minMatchCharLength: query.length > 1 ? 2 : 1
  }
  const fuse = new Fuse(data, options, index)
  return fuse.search(query).map(fuseResult => fuseResult.item)
}
