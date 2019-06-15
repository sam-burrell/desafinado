import React from "react"

const Header = ({ title, description, email, phone }) => (
  <>
    <h2>{title}</h2>
    <p style={{ maxWidth: "800px", color: "black" }}>{description}</p>
    <a href="mailto: {email}">{email}</a>
    <p>{phone}</p>
  </>
)

export default Header
