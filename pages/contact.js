import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text, Input } from "../components/Core";
import MapGoogle from "../components/MapGoogle";

import PageWrapper from "../components/PageWrapper";
import ContactForm from "components/Form/Contact";

const Contact2 = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Section>
          <div className="pt-5"></div>
          <Container className="position-relative">
            <Row>
              <Col lg={6} className="mb-5 mb-lg-0">
                <div className="banner-content mb-5">
                  <Title variant="hero">Let's get started.</Title>
                  <Text>
                    Interested in kickstarting a project? Leave your details and
                    let's discuss how we can collaborate.
                  </Text>
                </div>
                <ContactForm />
              </Col>
              <Col lg={8} className="position-static">
                <MapGoogle />
              </Col>
            </Row>
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};
export default Contact2;
