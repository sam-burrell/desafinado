import React from "react"

import desafinado from "../images/desafinado.jpeg"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/content"

const IndexPage = () => (
  <Layout>
    <div style={{ backgroundImage: { desafinado } }}>
      <SEO />
      <Content />
    </div>
  </Layout>
)

export default IndexPage
