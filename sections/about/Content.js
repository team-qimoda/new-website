import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

import imgContent1 from "../../assets/image/jpeg/easy-image-2-1.jpeg";
import imgContent2 from "../../assets/image/jpeg/easy-image-2-2.jpeg";
import { breakpoints } from "utils";

const ContentImg = styled(Box)`
  box-shadow: ${({ theme }) => `0 42px 54px ${theme.colors.shadow}`};
  border-radius: 10px;
  overflow: hidden;
  height: 350px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (min-width: ${breakpoints.lg}px) {
    height: 465px;
  }
`;

const Content = () => (
  <>
    <Section>
      <Container>
        <Row className="justify-content-center pb-4">
          <Col lg="6">
            <Title variant="hero">Our goal is to make your life simpler.</Title>
          </Col>
          <Col lg="6" className="pl-lg-5">
            <Text>
              Anybody can create a website, an app, a dashboard, whatever you
              come up with - but our team of professionals provide you with the
              right tools and guidance to make every decision (whether it be for
              design, marketing, or tech) a purposeful one.
            </Text>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="4" sm="5" className="mb-4 ">
            <ContentImg>
              <img src={imgContent1} alt="" className="img-fluid" />
            </ContentImg>
          </Col>
          <Col lg="8" sm="7" className="mb-4">
            <ContentImg>
              <img src={imgContent2} alt="" className="img-fluid" />
            </ContentImg>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Content;
