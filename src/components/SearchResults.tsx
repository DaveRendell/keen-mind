import * as React from "react"

interface SearchResultsProps {
  query: string
}

export default function({query}: SearchResultsProps) {
  return (
    <div className="search-results">
      {query}
    </div>
  )
}