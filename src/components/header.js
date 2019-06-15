import React from "react"

const Header = ({ title, description, email, phone }) => (
  <>
    <h2>{title}</h2>
    <p style={{ maxWidth: "800px", color: "black" }}>{description}</p>
    <p>
      <a href="mailto: {email}">{email}</a>
      <br />
      <a href="tel:{phone}">{phone}</a>
    </p>
  </>
)

export default Header
