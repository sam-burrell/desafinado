import React from "react"
import Iframe from "react-iframe"

import SectionHeader from "./section-header"

const Content = () => (
  <div style={{ maxWidth: 440, padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Desafinado"
      description="Tuneful jazz, standards & latin. As a duo, trio, 4 piece, or 5 piece."
    />
    <Iframe
      url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/784420671&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      width="100%"
      height="450"
      display="initial"
      position="relative"
      frameBorder="0"
    />
  </div>
)
export default Content
