import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "components/Core";
import { device } from "utils";

const SectionStyled = styled(Section)`
  padding-bottom: 30px;
  padding-top: 0;
  @media ${device.md} {
    padding-bottom: 70px;
  }
`;

const Fact = () => (
  <>
    {/* <!-- Fact section 1 --> */}
    <SectionStyled bg="dark">
      <Container>
        <Row>
          <Col md="4" sm="6" className="mb-4 mb-md-0">
            <Box pr={4}>
              <Title color="light" mb="20px!important">
                5+
              </Title>
              <Text color="lightShade">
                Collective years of expertise developing great software.
              </Text>
            </Box>
          </Col>
          <Col md="4" sm="6" className="mb-4 mb-md-0">
            <Box>
              <Title color="light" mb="20px!important">
                50%
              </Title>
              <Text color="lightShade">
                Average increase in website performance & conversion.
              </Text>
            </Box>
          </Col>
          <Col md="4" sm="6" className="mb-4 mb-md-0">
            <Box pl={[null, null, null, 4]}>
              <Title color="light" mb="20px!important">
                10+
              </Title>
              <Text color="lightShade">
                Portfolio clientele handled by the team.
              </Text>
            </Box>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
);

export default Fact;
