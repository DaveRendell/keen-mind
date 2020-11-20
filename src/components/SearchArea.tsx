import * as React from "react"
import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults"

export default function SearchArea() {
  const [query, setQuery] = React.useState("")
  return (
    <div className="search-area">
      <SearchBar query={query} setQuery={setQuery}/>
      <SearchResults query={query}/>
    </div>
  )
}
