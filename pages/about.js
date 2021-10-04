import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/common/Hero";
import Content from "../sections/about/Content";
import Team from "../sections/about/Team";
import CTA from "../sections/about/CTA";
import styled from "styled-components";
import qimodaSticker from "assets/image/png/qimoda-sticker.png";
import { breakpoints } from "utils";

const LongLogo = styled.div`
  display: inline-flex;
  height: 100px;
  align-items: center;

  img {
    height: 100%;
    width: 85%;
    margin-left: 10px;
    margin-top: 8px;
  }

  @media (min-width: ${breakpoints.lg}px) {
    img {
      width: 100%;
      height: calc(100% + 4px);
      object-fit: cover;
      margin-left: 15px;
    }
  }
`;

const StickerContainer = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  margin-top: 2em;

  @media (min-width: ${breakpoints.lg}px) {
    justify-content: flex-end;
  }

  img {
    width: auto;
    height: 100%;
  }
`;

const About = () => {
  return (
    <>
      <PageWrapper>
        <Hero
          title={
            <>
              <LongLogo>
                <span>The </span>
                <img src="/long-logo.svg" alt="Qimoda" />
              </LongLogo>{" "}
              <span>difference</span>
            </>
          }
          sideContent={
            <>
              <StickerContainer>
                <img src={qimodaSticker} alt="You think it, we build it!" />
              </StickerContainer>
            </>
          }
        >
          We're a ragtag team of young tech professionals determined to bring
          significant value to your business.
        </Hero>
        <Content />
        <Team />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default About;
