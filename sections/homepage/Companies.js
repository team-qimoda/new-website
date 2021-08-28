import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Box } from "../../components/Core";
import { device } from "../../utils";
import deloitteLogo from "public/companies/deloitte.png";
import ogilvyLogo from "public/companies/ogilvy.png";
import mayadLogo from "public/companies/mayad.png";
import njabLogo from "public/companies/njab.png";

const SectionStyled = styled(Section)`
  padding: 3em 0;

  @media ${device.lg} {
    padding: 5em 0;
  }
`;

const CompanyLogo = styled.img`
  height: auto;
  width: 100%;
`;

const LogoContainer = styled(Box)`
  width: 80%;

  @media ${device.md} {
    padding: 1em 0;
  }

  @media ${device.lg} {
    padding: s0;
  }
`;

const Companies = () => (
  <>
    {/* <!-- Fact section 1 --> */}
    <SectionStyled bg="dark">
      <Container>
        <Row>
          <Col
            lg="3"
            md="4"
            sm="6"
            className="mb-4 mb-md-0 d-flex align-items-center justify-content-center"
          >
            <LogoContainer>
              <CompanyLogo src={deloitteLogo} alt="Deloitte" />
            </LogoContainer>
          </Col>
          <Col
            lg="3"
            md="4"
            sm="6"
            className="mb-4 mb-md-0 d-flex align-items-center justify-content-center"
          >
            <LogoContainer>
              <CompanyLogo src={ogilvyLogo} alt="Ogilvy" />
            </LogoContainer>
          </Col>
          <Col
            lg="3"
            md="4"
            sm="6"
            className="mb-4 mb-md-0 d-flex align-items-center justify-content-center"
          >
            <LogoContainer>
              <CompanyLogo src={mayadLogo} alt="Mayad" />
            </LogoContainer>
          </Col>
          <Col
            lg="3"
            md="4"
            sm="6"
            className="mb-4 mb-md-0 d-flex align-items-center justify-content-center"
          >
            <LogoContainer>
              <CompanyLogo src={njabLogo} alt="Mayad" />
            </LogoContainer>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
);

export default Companies;
