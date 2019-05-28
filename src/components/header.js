import React from "react"

import { COLORS } from "../styles/constants"

const Header = ({ title, description }) => (
  <>
    <h2>{title}</h2>
    <p style={{ color: COLORS.mediumGray }}>{description}</p>
  </>
)

export default Header
