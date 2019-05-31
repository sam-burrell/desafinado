import React from "react"
import Iframe from "react-iframe"

import Header from "./header"
import Image from "./image"

const Content = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center", maxWidth: "60rem" }}>
    <Header
      title="Desafinado"
      description="Tuneful jazz, standards & latin. As a duo, trio, 4 piece, or 5 piece."
    />
    <div style={{display: "grid"}}>
      <div style ={{gridColumn: 1}}>
        <Image/>
      </div>
      <div style ={{gridColumn: 2}}>
      <Iframe
        url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/784420671&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        width="300"
        height="450"
        display="initial"
        position="relative"
        frameBorder="0"
      />
      </div>
    </div>
    <div>
      Desafinado is ideal for your club, function, restaurant, bar or private
      party when you want good music that allows easy conversation
    </div>
  </div>
)
export default Content
