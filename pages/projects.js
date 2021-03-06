import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text } from "../components/Core";

import CaseList from "../sections/case-study/CaseList1";
import CaseList2 from "../sections/case-study/CaseList2";
import CTA from "../sections/case-study/CTA";

const Projects = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="6">
                <Title variant="hero">Our Work</Title>
                <Text>
                  Our team has worked on interesting projects with a couple of
                  purpose-led businesses.
                </Text>
              </Col>
            </Row>
          </Container>
        </Section>
        <CaseList />
        {/* <CaseList2 /> */}
        <CTA />
      </PageWrapper>
    </>
  );
};
export default Projects;
