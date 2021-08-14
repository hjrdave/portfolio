/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useStaticQuery, graphql } from "gatsby";
import Header from "./organisms/header";
import Footer from './organisms/footer';
import "./layout.css"

const Layout = ({ children }: any) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Container fluid>
        <Header />
        <Row>
          <Col>
            {children}
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  )
}


export default Layout
