import React from "react"
import Iframe from "react-iframe"

import Header from "./header"
import Image from "./image"

const Content = () => (
  <div style={{ padding: "2rem 0.1rem", textAlign: "center" }}>
    <Header
      title="Desafinado"
      description="A tuneful jazz, standards & latin band. As a duo, trio, 4 piece, or 5 piece, Desafinado is ideal for your club, function, restaurant, bar or private
      party when you want good music that allows easy conversation."
      email="desafinado@pburrell.co.uk"
    />
    <div>
      <div style={{ margin: "10px" }}>
        <Image />
      </div>
      <div style={{ margin: "10px" }}>
        <Iframe
          url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/784420671&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          width="100%"
          height="450"
          display="initial"
          position="relative"
          frameBorder="0"
        />
      </div>
    </div>
  </div>
)
export default Content
