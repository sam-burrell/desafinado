import React from "react"

const Header = ({ title, description, email, phone }) => (
  <>
    <h2>{title}</h2>
    <p style={{ maxWidth: "800px", color: "black" }}>{description}</p>
    <p>Herts, Cambs, Beds, Bucks, North London</p>
    <p>
      email: <a href="mailto:{email}">{email}</a>
    </p>
    <p>
      phone: <a href="tel:+07747123322">07747 123 322</a>
    </p>
  </>
)

export default Header
