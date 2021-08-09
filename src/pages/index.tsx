import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"

const FeatureSection = styled.section`
  display: grid;
  grid-gap: 10px;
  margin: 40px 0px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Hello world!</h2>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <FeatureSection>
      <div>
        <h3>Styles via Emotion</h3>
        <StaticImage
          src="../images/emotion-logo.png"
          alt="emotion"
          width={200}
        />
      </div>
      <div>
        <h3>Google Fonts</h3>
        <StaticImage
          src="../images/google-fonts-logo.svg"
          alt="google fonts"
          width={200}
        />
      </div>
      <div>
        <h3>Typescript by default</h3>
        <StaticImage
          src="../images/typescript-logo.svg"
          alt="typescript"
          width={200}
        />
      </div>
    </FeatureSection>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
