import React from "react";
import CaseList from "sections/case-study/CaseList1";
import CaseDetails from "sections/case-study/CaseDetails";
import CTA from "sections/case-study/CTA";
import imgBrand from "assets/image/logo/njab.png";
import videoBrand from "public/video/njab.mp4";
import ProjectDetails from "templates/project-details";
import { Row, Col } from "react-bootstrap";
import { Box, Title, Text, Button, List } from "components/Core";
import imgCase2 from "assets/image/png/njab-mockup.png";
import imgCase3 from "assets/image/png/masonry-njab.png";
import gatsby from "assets/image/logo/gatsby.png";
import prismic from "assets/image/logo/prismic.jpeg";

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

const NJAB = () => {
  return (
    <>
      <ProjectDetails
        heading="Not Just a Box Events"
        image={imgBrand}
        subheading={
          <>
            Find out about our venture on the lovestruck industry of weddings
            and marriage through our collaboration with Not Just a Box Events.
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
                  Not Just a Box Events (or NJAB, for short) is a weddings and
                  events coordinator from Iloilo, Philippines. Their existing
                  digital offerings included a Wordpress site that was not
                  optimised with user experience in mind, and their social media
                  presence was not extensive enough to convert audience into
                  customers.
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
                  We designed and developed a custom website based on Gatsby - a
                  React framework optimised for static-site generation, which
                  gives it great performance and SEO optimisation.
                </Text>
                <Text variant="small" mb={3}>
                  As for content management, we implemented Prismic as a Content
                  Management System (CMS). Prismic provides several advantages
                  that supported a future-friendly solution, with tools
                  including built-in image optimisation and flexible data
                  structure creation.
                </Text>
              </Box>
              <Box pb={["40px", null, "65px"]}>
                <Title variant="card" mt="18px" mb="18px">
                  Technologies
                </Title>
                <LogoList>
                  <LogoContainer>
                    <TechLogo src={gatsby} />
                  </LogoContainer>

                  <LogoContainer>
                    <TechLogo src={prismic} />
                  </LogoContainer>
                </LogoList>
              </Box>
              <Box pb={["40px", null, "65px"]}>
                <Title variant="card" mb="18px">
                  Learnings
                </Title>
                <Text variant="small">
                  While we did enable NJAB to take on greater heights due to our
                  digital transformation project, there was still a lot of
                  maintenance work to be done. As per usual with code, whenever
                  additional components and functionalities are added there's a
                  certain tradeoff with performance. Therefore, performance
                  optimisations to increase conversion rate can still be
                  implemented when necessary.
                </Text>
              </Box>
              <Box>
                <Button link="https://notjustaboxevents.com">
                  Check live website
                </Button>
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
export default NJAB;
