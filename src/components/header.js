import React from "react"

import { COLORS } from "../styles/constants"

const Header = ({ title, description, text }) => (
  <>
    <h2>{title}</h2>
    <p style={{ color: "black" }}>{description}</p>
    <p style={{ color: COLORS.mediumGray }}>{text}</p>
  </>
)

export default Header
