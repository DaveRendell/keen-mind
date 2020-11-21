import * as React from "react"
import SearchResult from "../models/searchResult"
import * as ReactMarkdown from "react-markdown"
import * as remarkGFM from "remark-gfm"

interface SearchResultProps {
  searchResult: SearchResult
}

export default function(
  { 
    searchResult: {
      title,
      content
    } 
  }: SearchResultProps
) {
  return (
    <div className="search-result">
      <h3>{ title }</h3>
      <ReactMarkdown
        plugins={[remarkGFM]}
        children={content}
      />
    </div>
  )
}
