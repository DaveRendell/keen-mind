import * as React from "react"
import PhaseBanner from "./PhaseBanner"
import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults"

export default function SearchArea() {
  const [query, setQuery] = React.useState("")
  return (
    <div>
      <header>
        <PhaseBanner />
        <div className="hero-column">
          <h1>Keen Mind</h1>
          <SearchBar query={query} setQuery={setQuery} />
        </div>
      </header>
      <SearchResults query={query} />
    </div>
  )
}
