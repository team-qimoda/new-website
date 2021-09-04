import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "components/PageWrapper";
import { Section, Title, Text, Box } from "components/Core";
import styled from "styled-components";

const LogoContainer = styled(Box)`
  height: 80px;

  img {
    height: 100%;
  }
`;

const ProjectDetails = ({ heading, image, subheading, children }) => {
  return (
    <>
      <PageWrapper footerDark>
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <LogoContainer className="text-center" mb={4}>
                  <img src={image} alt="" className="img-fluid" />
                </LogoContainer>
                <Title variant="hero">{heading}</Title>
                <Text>{subheading}</Text>
              </Col>
            </Row>
          </Container>
        </Section>
        {children}
      </PageWrapper>
    </>
  );
};
export default ProjectDetails;
