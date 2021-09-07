/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import Container from 'react-bootstrap/Container';
import Bubbles from '../../atoms/bubbles';
import { useStaticQuery, graphql } from "gatsby";
import Header from "../../organisms/header";
import Footer from '../../organisms/footer';
import '../../../styles/styles.global.scss';

interface Props {
  children: JSX.Element | JSX.Element[];
}
export default function Layout({ children }: Props) {
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
      <Container fluid className='p-0'>
        <Bubbles />
        {/* <Header /> */}
        {children}
        <Footer />
      </Container>
    </>
  )
}
