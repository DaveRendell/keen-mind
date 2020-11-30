import * as React from "react"
import Footer from "./Footer"
import PhaseBanner from "./PhaseBanner"
import SearchArea from "./SearchArea"

export default function() {
  return (
    <div>
      <PhaseBanner />
      <h1>Keen Mind</h1>
      <SearchArea />
      <Footer />
    </div>
  )
}
