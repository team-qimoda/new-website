import React from "react";
import Hero from "sections/homepage/Hero";
import Fact from "sections/homepage/Fact";
import Content from "sections/homepage/Content";
import CaseStudies from "sections/homepage/CaseStudies";
// import Reviews from "sections/homepage/Reviews";
import Contact from "sections/homepage/Contact";

import PageWrapper from "components/PageWrapper";
import Companies from "sections/homepage/Companies";

const LandingPage7 = () => {
  return (
    <>
      <PageWrapper headerDark footerDark>
        <Hero />
        <Fact />
        <Companies />
        <Content />
        <CaseStudies />
        {/* <Reviews /> */}
        <Contact />
      </PageWrapper>
    </>
  );
};
export default LandingPage7;
