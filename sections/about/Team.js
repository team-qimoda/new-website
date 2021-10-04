import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

import imgU1 from "../../assets/image/jpeg/sidney.jpeg";
import imgU2 from "../../assets/image/jpeg/sam.jpeg";
import imgU3 from "../../assets/image/png/arben.png";
import imgU4 from "../../assets/image/jpeg/about-team-5.jpg";
import imgU5 from "../../assets/image/jpeg/about-team-6.jpg";
import imgU6 from "../../assets/image/jpeg/about-team-2.jpg";

const CardImage = styled.div`
  height: 160px;
  width: 160px;
  overflow: hidden;
  border-radius: 500px;
  display: inline-flex;
  align-items: center;
  margin-bottom: 29px;

  img {
    object-fit: cover;
    max-width: initial;
    height: 100%;
  }
`;

const TeamCard = ({ userImg, title, children, ...props }) => (
  <Box
    className="text-center"
    pt="15px"
    px="30px"
    borderRadius={10}
    mb={4}
    {...props}
  >
    <CardImage>
      <img src={userImg} className="img-fluid" alt="" />
    </CardImage>
    <div className="text-center">
      <Title variant="card" fontSize="24px" letterSpacing={-0.75} my={1}>
        {title}
      </Title>
      <Text fontSize={2} lineHeight={1.75}>
        {children}
      </Text>
    </div>
  </Box>
);

const Team = () => (
  <>
    {/* <!-- Team section --> */}
    <Section className="position-relative pt-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg="6" className="text-center pb-3">
            <div className="">
              <Title>Meet the team</Title>
              <Text>
                From tech implementation to social media strategy, our
                experienced team can provide you with guidance every step of the
                way.
              </Text>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center">
          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-4">
            <TeamCard userImg={imgU1} title="Sidney Ramos">
              Founder and CEO
            </TeamCard>
          </Col>
          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-4">
            <TeamCard userImg={imgU2} title="Alahna Sam Sy">
              Digital Marketing Director & Consultant
            </TeamCard>
          </Col>
          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-4">
            <TeamCard userImg={imgU3} title="Arben Camayang">
              Digital Marketing Specialist & Voice Talent
            </TeamCard>
          </Col>
          {/* <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-4">
            <TeamCard userImg={imgU4} title="George Torres">
              UX Designer
            </TeamCard>
          </Col>
          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-4">
            <TeamCard userImg={imgU5} title="Daisy Ferguson">
              Content Writer
            </TeamCard>
          </Col>
          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-4">
            <TeamCard userImg={imgU6} title="Todd Summers">
              Digital Marketer
            </TeamCard>
          </Col> */}
        </Row>
      </Container>
    </Section>
  </>
);

export default Team;
