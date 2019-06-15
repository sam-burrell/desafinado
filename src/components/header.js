import React from "react"

import { COLORS } from "../styles/constants"

const Header = ({ title, description}) => (
  <>
    <h2>{title}</h2>
    <p style={{ maxWidth: "800px", color: "black" }}>{description}</p>
  </>
)

export default Header
