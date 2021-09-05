import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { Section, Box } from "../../components/Core";
import { device } from "../../utils";
import deloitteLogo from "public/companies/deloitte.png";
import mayadLogo from "public/companies/mayad.png";
import njabLogo from "public/companies/njab.png";
import IKLogo from "public/companies/insuranceko.png";

const SectionStyled = styled(Section)`
  padding: 3em 0;

  @media ${device.lg} {
    padding: 5em 0;
  }
`;

const LogoContainer = styled(Box)`
  width: 80%;
  height: 70px;

  div {
    height: 100%;

    img {
      object-fit: contain;
      height: 100%;
    }
  }

  @media ${device.md} {
    padding: 1em 0;
  }

  @media ${device.lg} {
    padding: 0;
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
              <Image
                src={deloitteLogo}
                alt="Deloitte"
                height={100}
                width={400}
              />
            </LogoContainer>
          </Col>
          <Col
            lg="3"
            md="4"
            sm="6"
            className="mb-4 mb-md-0 d-flex align-items-center justify-content-center"
          >
            <LogoContainer>
              <Image src={IKLogo} alt="InsuranceKo" height={100} width={400} />
            </LogoContainer>
          </Col>
          <Col
            lg="3"
            md="4"
            sm="6"
            className="mb-4 mb-md-0 d-flex align-items-center justify-content-center"
          >
            <LogoContainer>
              <Image src={mayadLogo} alt="Mayad" height={100} width={400} />
            </LogoContainer>
          </Col>
          <Col
            lg="3"
            md="4"
            sm="6"
            className="mb-4 mb-md-0 d-flex align-items-center justify-content-center"
          >
            <LogoContainer>
              <Image src={njabLogo} alt="NJAB" height={100} width={400} />
            </LogoContainer>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
);

export default Companies;
