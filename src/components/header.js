import React from "react"

const Header = ({ title, description, email, phone }) => (
  <>
    <h2>{title}</h2>
    <p style={{ maxWidth: "800px", color: "black" }}>{description}</p>
    <p>
      <a href="mailto:{email}">{email}</a>
    </p>
    <p>
      <a href="tel:+07747123322">07747 123 322</a>
    </p>
  </>
)

export default Header
