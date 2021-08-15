import * as React from "react"
import Seo from "../components/seo"
import LandingBanner from '../components/organisms/landing-banner';
import Section from '../components/atoms/section';

export default function Page() {
  return (
    <>
      <Seo title="Home" />
      <LandingBanner />
      <Section />
    </>
  )
}
