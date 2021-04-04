import * as React from "react"
import SearchResult from "../models/searchResult"
import * as ReactMarkdown from "react-markdown"
import * as remarkGFM from "remark-gfm"

interface SearchResultProps {
  searchResult: SearchResult
  isFirst: boolean
}

export default function ({
  searchResult: { title, content, breadcrumbs },
  isFirst,
}: SearchResultProps) {
  return (
    <div className="search-result">
      {isFirst ? null : <hr />}
      <div className="pad-top">
        {breadcrumbs.map((breadcrumb, idx) => {
          return (
            <span key={idx}>
              <span>{idx > 0 ? " > " : null}</span>
              <strong>{breadcrumb}</strong>
            </span>
          )
        })}
      </div>
      <h2>{title}</h2>
      <ReactMarkdown plugins={[remarkGFM]} children={content} />
    </div>
  )
}
