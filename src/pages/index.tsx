import React from "react"
import Seo from "../components/seo"
import LandingBanner from '../components/organisms/landing-banner';
import SkillSection from '../components/organisms/skill-section';
import DevSection from "../components/organisms/dev-section";
import UIDesignSection from "../components/organisms/ui-design-section";
import DesignSection from "../components/organisms/design-section";

export default function Page() {

  const skillRef = React.useRef(null);
  const onClick = () => ((skillRef.current) ? (skillRef.current as any)?.scrollIntoView({ behavior: 'smooth' }) : null);
  return (
    <>
      <Seo title="Home" />
      <LandingBanner onArrowClick={onClick} />
      <SkillSection compRef={skillRef} />
      <DevSection />
      <DesignSection />
    </>
  )
}
