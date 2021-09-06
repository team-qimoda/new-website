import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Span } from "components/Core";
import { device } from "utils";

const ContentWidget = styled(Box)`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.lighterBrown};
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 20px 0;
  padding-left: 28px;
  padding-right: 55px;
  min-width: 100%;
  width: 100%;
  min-height: 90px;
  display: flex;
  align-items: center;
  transition: 0.4s;
  cursor: pointer;

  @media ${device.xl} {
    width: 360px;
    min-width: 360px;
  }
  @media ${device.md} {
    min-height: 89px;
  }

  i {
    font-size: 30px;
    color: #fff;
    position: absolute;
    right: 0;
    margin-right: 30px;
    opacity: 0;
    transition: 0.4s;
  }

  &:hover {
    box-shadow: 0 52px 54px rgba(25, 25, 27, 0.3);
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  &:hover i {
    transform: translateX(10px);
    opacity: 1;
  }
`;

const ContentCard = ({ children = "" }) => {
  return (
    <ContentWidget>
      <div className="d-flex align-items-center">
        <Title color="light" variant="card" mb={0}>
          {children}
        </Title>
      </div>

      <i className="fas fa-chevron-circle-right"></i>
    </ContentWidget>
  );
};

const Linebreak = styled.br`
  display: none;
  @media ${device.md} {
    display: initial;
  }
`;

const Content = () => {
  return (
    <>
      {/* <!-- Content section --> */}
      <Section bg="dark">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg="10">
              <div className="text-center">
                <Title color="light">
                  With our team of experts, you can quickly{" "}
                  <Span color="secondary">develop</Span> your idea
                  <Linebreak /> from <Span color="secondary">
                    start
                  </Span> to <Span color="secondary">finish</Span>.
                </Title>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col
              lg="4"
              md="6"
              className="mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <ContentCard>UI/UX Design</ContentCard>
            </Col>
            <Col
              lg="4"
              md="6"
              className="mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-delay="600"
            >
              <ContentCard>Website Development</ContentCard>
            </Col>
            <Col
              lg="4"
              md="6"
              className="mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-delay="400"
            >
              <ContentCard>Content Marketing</ContentCard>
            </Col>

            <Col
              lg="4"
              md="6"
              className="mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-delay="800"
            >
              <ContentCard>Search Engine Optimization</ContentCard>
            </Col>
            <Col
              lg="4"
              md="6"
              className="mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-delay="1000"
            >
              <ContentCard>Maintenance & Support</ContentCard>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Content;
