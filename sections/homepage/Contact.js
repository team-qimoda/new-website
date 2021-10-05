import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Box, Text, Input, Checkbox } from "components/Core";

import { device } from "utils";

import imgShape from "assets/image/svg/contact-shape.svg";
import ContactForm from "components/Form/Contact";

const BoxStyled = styled(Box)`
  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 49%;
    content: "";
    width: 100%;
    background: ${({ theme }) => theme.colors.secondary};
    z-index: 1;
  }
`;

const Shape = styled(Box)`
  position: absolute;
  width: 150%;
  bottom: 48%;
  left: -5%;

  @media ${device.lg} {
    bottom: 47%;
  }
`;

const FormStyled = styled.form`
  padding: 40px 30px;
  @media ${device.sm} {
    padding: 53px 58px 50px;
  }
  box-shadow: ${({ theme }) => `0 20px 61px ${theme.colors.shadow}`};
  border-radius: 10px;
  background-color: #f7f7fb;
  width: 100%;
`;

const AForgot = styled.a`
  color: ${({ theme }) => theme.colors.secondary} !important;
  text-decoration: none !important;
`;

const Contact = () => (
  <>
    <BoxStyled
      bg="dark"
      pt={[0, null, null, 4]}
      pb={6}
      className="position-relative"
    >
      <Shape>
        <img src={imgShape} alt="" className="w-100 img-fluid" />
      </Shape>
      <Container
        css={`
          position: relative;
          z-index: 10;
        `}
      >
        <Row className="justify-content-center">
          <Col
            lg="9"
            xl="8"
            data-aos="fade-up"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="500"
          >
            <FormStyled>
              <div className="mb-5 text-center">
                <Title className="mb-2">Let’s talk</Title>
                <Text>Drop us a line & we will get back to you soon!</Text>
              </div>

              <ContactForm buttonText="Send" />
            </FormStyled>
          </Col>
        </Row>
      </Container>
    </BoxStyled>
  </>
);

export default Contact;
