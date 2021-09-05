import React from "react";
import CaseList from "sections/case-study/CaseList1";
import CaseDetails from "sections/case-study/CaseDetails";
import CTA from "sections/case-study/CTA";
import imgBrand from "assets/image/logo/insuranceko.png";
import videoBrand from "public/video/insuranceko.mp4";
import ProjectDetails from "templates/project-details";
import { Row, Col } from "react-bootstrap";
import { Box, Title, Text, Button, List } from "components/Core";
import imgCase2 from "assets/image/png/insuranceko-mockup.png";
import imgCase3 from "assets/image/png/masonry-insuranceko.png";
import nextjs from "assets/image/logo/nextjs.png";
import prismic from "assets/image/logo/prismic.jpeg";
import fauna from "assets/image/logo/fauna.svg";
import styled from "styled-components";
import { breakpoints } from "utils";

const CaseImage = styled(Box)`
  height: 250px;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 1em;

  @media (min-width: ${breakpoints.lg}px) {
    height: 450px;
    margin-bottom: 0;
  }
`;

const InsideImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const LogoList = styled.div`
  @media (min-width: ${breakpoints.lg}px) {
    display: flex;
  }
`;

const LogoContainer = styled.div`
  height: 40px;
  margin-bottom: 0.5em;

  @media (min-width: ${breakpoints.lg}px) {
    margin: 0 1em;

    &:first-of-type {
      margin-left: 0;
    }
  }
`;

const TechLogo = styled.img`
  height: 100%;

  object-fit: cover;

  @media (min-width: ${breakpoints.lg}px) {
    width: 100%;
  }
`;

const InsuranceKo = () => {
  return (
    <>
      <ProjectDetails
        heading="InsuranceKo"
        image={imgBrand}
        subheading={
          <>
            How easy should getting insurance be? In a world of uncertainties,
            it pays well to be prepared. Through our work with InsuranceKo, we
            explore several avenues of how people can easily access insurance.
          </>
        }
      >
        <CaseDetails heroVideo={videoBrand}>
          <Row>
            <Col lg="12" xl="10" className="offset-xl-1">
              <Box pb={["40px", null, "65px"]}>
                <Title variant="card" mb="18px">
                  Client Brief
                </Title>
                <Text variant="small">
                  InsuranceKo, an insurance provider based in the Philippines,
                  contacted us to create their own e-commerce website as well as
                  a client portal to assist with their product offerings. In an
                  effort to make insurance as accessible as possible, we
                  designed a user-friendly shopfront website alongside an
                  intuitive authentication and e-commerce experience.
                </Text>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col lg="6" className="mb-lg-0 mb-30">
              <CaseImage>
                <InsideImage src={imgCase2} alt="" className="img-fluid" />
              </CaseImage>
            </Col>
            <Col lg="6">
              <CaseImage>
                <InsideImage src={imgCase3} alt="" className="img-fluid" />
              </CaseImage>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col lg="12" xl="10" className="offset-xl-1 pt-4">
              <Box pb={["40px", null, "30px"]}>
                <Title variant="card" mb="18px">
                  Solution
                </Title>
                <Text variant="small" mb={3}>
                  We're currently designing and developing a custom website
                  built on Next.js - a React framework optimised not just for{" "}
                  <strong>static-site</strong> (static pages rely on unchanging
                  data, i.e. pages that don't change content unless you refresh
                  the page like blog posts) but also{" "}
                  <strong>dynamic site</strong> generation (dynamic pages
                  operate on changing data, i.e. profile pages, authentication).
                </Text>
                <Text variant="small" mb={3}>
                  As for content management, we implemented Prismic as a Content
                  Management System (CMS). Prismic provides several advantages
                  that supported a future-friendly solution, with tools
                  including built-in image optimisation and flexible data
                  structure creation.
                </Text>
                <Text variant="small" mb={3}>
                  For authentication and general back-end functionality, we
                  utilised Fauna. Fauna is a fast, transactional database
                  platform with built-in modules such as authentication, as well
                  as scaling capabilities.
                </Text>
              </Box>
              <Box pb={["40px", null, "65px"]}>
                <Title variant="card" mt="18px" mb="18px">
                  Technologies
                </Title>
                <LogoList>
                  <LogoContainer>
                    <TechLogo src={nextjs} />
                  </LogoContainer>

                  <LogoContainer>
                    <TechLogo src={prismic} />
                  </LogoContainer>

                  <LogoContainer>
                    <TechLogo src={fauna} />
                  </LogoContainer>
                </LogoList>
              </Box>
              <Box pb={["40px", null, "65px"]}>
                <Title variant="card" mb="18px">
                  Learnings
                </Title>
                <Text variant="small">
                  As this project is still under development, we expect certain
                  details to change quickly. Though we may have hit a few road
                  bumps here and there we're currently on track to finishing it
                  to the discussed timeframe.
                </Text>
              </Box>
              <Box>
                <Button>Currently in development</Button>
              </Box>
            </Col>
          </Row>
        </CaseDetails>
        {/* <CaseList /> */}
        <CTA />
      </ProjectDetails>
    </>
  );
};
export default InsuranceKo;
