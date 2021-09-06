import React from "react";
import dynamic from "next/dynamic";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Title, Button, Section, Box, Text } from "../../components/Core";
const Illustration = dynamic(() => import("./Illustration"));
import { breakpoints } from "utils/breakpoints";

const HeroTitle = styled(Title)`
  font-size: 2.5em;
  @media (min-width: ${breakpoints.lg}px) {
    font-size: 4em;
  }
`;

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section bg="dark">
        <div className="pt-5"></div>
        <Container
          className="position-relative"
          css={`
            z-index: 10;
          `}
        >
          <Row>
            <Col sm="12" lg="9">
              <Box py={4}>
                <Text
                  color="light"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                  data-aos-delay="700"
                >
                  A digital agency dedicated to your business needs
                </Text>
                <HeroTitle
                  my={4}
                  variant="hero"
                  color="light"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                  data-aos-delay="1000"
                >
                  Tailored solutions
                  <br className="d-none d-lg-block" />
                  {` `}for everyday problems
                </HeroTitle>
                <Box
                  pt="12px"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                  data-aos-delay="1300"
                >
                  <Button link="/contact">Get In Touch</Button>
                </Box>
              </Box>
            </Col>
            <Col sm="12" lg="3">
              <Illustration />
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
