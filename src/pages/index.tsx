import React from "react"
import Seo from "../components/seo"
import LandingBanner from '../components/organisms/landing-banner';
import SkillSection from '../components/organisms/skill-section';
import DevSection from "../components/organisms/dev-section";
import UIDesignSection from "../components/organisms/ui-design-section";
import DesignSection from "../components/organisms/design-section";

export default function Page() {
  return (
    <>
      <Seo title="Home" />
      <LandingBanner />
      <SkillSection />
      <DevSection />
      {/* <UIDesignSection /> */}
      <DesignSection />
    </>
  )
}
