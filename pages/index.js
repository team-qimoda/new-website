import React from "react";
import dynamic from "next/dynamic";

import Hero from "sections/homepage/Hero";
import Fact from "sections/homepage/Fact";
// import Reviews from "sections/homepage/Reviews";
import PageWrapper from "components/PageWrapper";
import Companies from "sections/homepage/Companies";
const CaseStudies = dynamic(() => import("sections/homepage/CaseStudies"));
const Contact = dynamic(() => import("sections/homepage/Contact"));
const Content = dynamic(() => import("sections/homepage/Content"));

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
