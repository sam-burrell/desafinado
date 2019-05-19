import React from "react"
import PropTypes from "prop-types"

import MockupContent from "./image"
import mockupFrame from "../images/mockup-frame.png"

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "4rem 1rem",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
      }}
    />
    <h1 style={{ textAlign: "center" }}>Desafinado</h1>
    <p style={{ textAlign: "center", maxWidth: 440 }}>
      Desafinado is a relaxed function band playing in Herts, Beds, Bucks and
      North London:
    </p>
    <p style={{ textAlign: "center", maxWidth: 440 }}>
      Tuneful jazz, standards & latin. As a duo, trio, 4 piece, or 5 piece
    </p>
    <p style={{ textAlign: "center", maxWidth: 440 }}>
      Desafinado is ideal for your club, function, restaurant, bar or private
      party when you want good music that allows easy conversation
    </p>
    <div style={{ margin: 60, width: `250px`, position: "relative" }}>
      <div style={{ clipPath: "inset(2% 5% round 2% 5%)" }}>
        <MockupContent />
      </div>
      <div
        style={{
          position: "absolute",
          width: "250px",
          top: 0,
        }}
      >
        <img
          src={mockupFrame}
          alt="outlines of shapes and confetti in the background "
        />
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
