import * as React from "react"

interface SearchBarProps {
  query: string
  setQuery: (query: string) => void
}

export default function ({ query, setQuery }: SearchBarProps) {
  return (
    <div className="search-bar">
      <div className="sepia">🔍</div>
      <input value={query} onChange={e => setQuery(e.target.value)} autoFocus />
    </div>
  )
}
