import * as React from "react"
import SearchResult from "../models/searchResult";

interface SearchResultProps {
  searchResult: SearchResult
}

export default function(
  { 
    searchResult: {
      title
    } 
  }: SearchResultProps
) {
  return (
    <div className="search-result">
      { title }
    </div>
  )
}
