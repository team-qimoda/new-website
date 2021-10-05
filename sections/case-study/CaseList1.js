import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section } from "../../components/Core";
import PostCard from "../../components/PostCard";

import imgCase1 from "assets/image/jpeg/wedding.jpeg";
import imgCase2 from "assets/image/jpeg/insurance.jpeg";
import imgBrand1 from "../../assets/image/jpeg/case-card-brand-img.jpg";
import imgBrand2 from "../../assets/image/jpeg/case-card-brand-img-2.jpg";

const CaseList = () => (
  <>
    {/* <!-- Feature section --> */}
    <Section className="position-relative">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg="4" className="mb-5 mb-lg-0">
            <PostCard
              img={imgCase1}
              imgBrand={imgBrand1}
              title="Not Just a Box Events"
            >
              Find out about our venture on the lovestruck industry of weddings
              and marriage through our collaboration with Not Just a Box Events.
            </PostCard>
          </Col>
          <Col lg="4" className="mb-5 mb-lg-0">
            <PostCard img={imgCase2} imgBrand={imgBrand2} title="InsuranceKo">
              How easy should getting insurance be? In a world of uncertainties,
              it pays well to be prepared. Through our work with InsuranceKo, we
              explore several avenues of how people can easily access insurance.
            </PostCard>
          </Col>
          {/* <Col lg="4" className="mb-5 mb-lg-0">
            <PostCard
              img={imgCase3}
              imgBrand={imgBrand3}
              title="Brag Mobile App"
            >
              Throwing consider dwelling bachelor joy her proposal laughter.
              Raptures returned disposed one entirely her men ham.
            </PostCard>
          </Col> */}
        </Row>
      </Container>
    </Section>
  </>
);

export default CaseList;
