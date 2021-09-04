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
import imgCase3 from "assets/image/jpeg/case-details-half-single-2.jpg";
import styled from "styled-components";

const CaseImage = styled(Box)`
  height: 450px;
  overflow: hidden;
  border-radius: 10px;
`;

const InsideImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
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
                  A Senior Data Engineer provides technical and delivery
                  leadership for a team of developers working on data
                  integration and processing projects. This role will work with
                  stakeholders and other developers to design and implement
                  technical data solutions for the business in a way that
                  balances quality, cost, time and maintainability.
                </Text>
              </Box>
              {/* <Box pb={["40px", null, "65px"]}>
                <Title variant="card" mb="18px">
                  Client Brief
                </Title>
                <Text variant="small">
                  A Senior Data Engineer provides technical and delivery
                  leadership for a team of developers working on data
                  integration and processing projects. This role will work with
                  stakeholders and other developers to design and implement
                  technical data solutions for the business in a way that
                  balances quality, cost, time and maintainability.
                </Text>
              </Box> */}
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
              <Box pb={["40px", null, "65px"]}>
                <Title variant="card" mb="18px">
                  Solutions
                </Title>
                <Text variant="small" mb={3}>
                  A Senior Data Engineer provides technical and delivery
                  leadership for a team of developers working on data
                  integration and processing projects. This role will work with
                  stakeholders and other developers to design and implement.
                </Text>
                <List>
                  <li>
                    This role will work with stakeholders and other developers
                    to design and implement.
                  </li>
                  <li>
                    Create custom landing pages with Omega that converts more
                    visitors than any website. With lots of unique blocks, you
                    can easily build a page without any design or custom coding.
                  </li>
                  <li>
                    You might be surprised to know that not only do we run some
                    of the biggest websites in the world; we’re also growing
                    really fast! We have close to 600 staff and contractors
                    worldwide, adding more than 100 people to the business,
                    which grows year on year, since 2017.
                  </li>
                </List>
              </Box>
              <Box pb={["40px", null, "65px"]}>
                <Title variant="card" mb="18px">
                  Learnings
                </Title>
                <Text variant="small">
                  A Senior Data Engineer provides technical and delivery
                  leadership for a team of developers working on data
                  integration and processing projects. This role will work with
                  stakeholders and other developers to design and implement
                  technical data solutions for the business in a way that
                  balances quality, cost, time and maintainability.
                </Text>
              </Box>
              <Box>
                <Button>Check live website</Button>
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
