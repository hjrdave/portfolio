import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
interface Props {
  siteTitle: string
}

const StyledHeader = styled.header`
  background: #294e80;
  margin-bottom: 1.45rem;
`
const Content = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
  h1 {
    margin: 0;
  }
  a {
    color: white;
    text-decoration: none;
    font-size: 0.75em;
    font-family: "Barlow Semi Condensed";
  }
`
const Header = ({ siteTitle = "" }: Props) => (
  <StyledHeader>
    <Content>
      <h1>
        <Link to="/" style={{}}>
          {siteTitle}
        </Link>
      </h1>
    </Content>
  </StyledHeader>
)

export default Header
