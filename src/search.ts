import SearchResult from "./models/searchResult";
import Fuse from "fuse.js"
import content from "./content"

const defaultOptions = {
  keys: [
    "title"
  ]
}
const index = Fuse.createIndex(defaultOptions.keys, content)

export default function search(query: string): SearchResult[] {
  const options = {
    ...defaultOptions,
    // For single char searches, show matches, but for longer searches we
    // demand a minimum match length of 2 characters.
    minMatchCharLength: query.length > 1 ? 2 : 1
  }
  const fuse = new Fuse(content, options, index)
  return fuse.search(query, { limit: 25 }).map(fuseResult => fuseResult.item)
}
