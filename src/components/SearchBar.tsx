import * as React from "react"

interface SearchBarProps {
  query: string
  setQuery: (query: string) => void
}

export default function ({ query, setQuery }: SearchBarProps) {
  const inputRef = React.useRef<HTMLInputElement | null>()
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Normal handling for other keys, or if we're typing / into the bar when
      // it's already selected.
      if (e.key !== "/" || inputRef.current === document.activeElement) {
        return
      }

      inputRef.current?.focus()
      e.preventDefault()
    }

    document.addEventListener("keypress", handler)
    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [])

  return (
    <div className="search-bar">
      <div className="sepia">🔍</div>
      <input
        ref={inputRef}
        value={query}
        onChange={e => setQuery(e.target.value)}
        autoFocus
      />
      <div className="translucent key">/</div>
    </div>
  )
}
