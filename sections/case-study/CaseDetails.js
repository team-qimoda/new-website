import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Box, Title, Text, Button, List } from "components/Core";

import imgCase1 from "assets/image/jpeg/case-details--details.jpg";
import { breakpoints } from "utils";

const ImgContainer = styled(Box)`
  height: 200px;
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  @media (min-width: ${breakpoints.lg}px) {
    height: auto;
  }
`;

const CaseDetails = ({ heroImage = imgCase1, heroVideo, children }) => (
  <>
    <Section className="position-relative">
      <Container>
        <ImgContainer className="text-center" mb={["50px", null, "75px"]}>
          {heroVideo ? (
            <video autoPlay muted loop playsInline>
              <source src={heroVideo} type="video/mp4" />
            </video>
          ) : heroImage ? (
            <img src={imgCase1} alt="" className="img-fluid" />
          ) : (
            <div> Image Not Found</div>
          )}
        </ImgContainer>

        {children}
      </Container>
    </Section>
  </>
);

export default CaseDetails;
