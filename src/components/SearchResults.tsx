import * as React from "react"
import search from "../search"
import SearchResult from "./SearchResult"

interface SearchResultsProps {
  query: string
}


export default function({query}: SearchResultsProps) {
  const searchResults = search(query)
  return (
    <div className="search-results">
      {
        searchResults.map((searchResult, idx) => 
          <SearchResult
            key={ idx }
            searchResult={ searchResult }
            isFirst={ idx == 0 }
          />)
      }
    </div>
  )
}