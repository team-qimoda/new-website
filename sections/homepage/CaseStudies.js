import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Box, Text, Button } from "components/Core";
import { device } from "utils";
import imgCase1 from "assets/image/jpeg/wedding.jpeg";
import imgCase2 from "assets/image/jpeg/insurance.jpeg";
import Image from "next/image";

const CaseCardStyled = styled(Box)`
  width: 100%;
  transition: 0.4s;

  .img-container {
    position: relative;
    z-index: 1;
    max-height: 350px;

    img {
      border-radius: 8px 8px 0 0;
      max-width: 100%;
    }
  }

  &:hover {
    transform: translateY(-20px);
  }
  &:hover i {
    transform: translateX(10px);
    opacity: 1;
  }
`;

const BtnContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  margin-top: 20px;
  opacity: 0;
  transition: 0.4s opacity, 0.4s margin-top;
  height: 40px;
  font-size: 16px;
  text-align: center;
  ${CaseCardStyled}:hover & {
    opacity: 1;
    margin-top: 0px;
  }
  button {
    font-size: 16px;
    padding: 0.5rem 1.25rem;
    @media ${device.sm} {
      font-size: 18px;
      padding: 0.75rem 1.5rem;
    }
    @media ${device.lg} {
      padding: 0.85rem 1.75rem;
    }
  }
`;

const TextContent = styled(Box)`
  position: relative;
  z-index: 1;
  transition: 0.4s;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding-top: 23px;
  padding-bottom: 21px;
  padding-left: 20px;
  padding-right: 20px;

  @media ${device.sm} {
    padding-top: 43px;
    padding-bottom: 41px;
    padding-left: 38px;
    padding-right: 38px;
  }
`;

const Shape = styled(Box)`
  background: initial;
  position: absolute;
  width: 100%;
  left: 0;
  z-index: 2;
  bottom: 98%;
  @media ${device.sm} {
    bottom: 99%;
  }
  @media ${device.xl} {
    bottom: 100%;
  }
  svg {
    width: 100%;
    path {
      fill: ${({ theme, bg }) => theme.colors[bg]};
      transition: 0.4s;
    }
  }
`;

const PreTitle = styled(Text)`
  font-size: 16px;
  font-weight: 300;
  letter-spacing: -0.5px;
  line-height: 28px;
  margin-bottom: 22px;
`;

const TitleStyled = styled(Title)`
  letter-spacing: -1.06px;
  margin-bottom: 22px;
  font-size: 28px;
  font-weight: 700;
  line-height: 42px;
  @media ${device.sm} {
    font-size: 34px;
    font-weight: 700;
  }
`;

const ImgContainer = styled.div`
  height: 350px;

  & > div:first-of-type {
    height: 100%;
    width: 100%;

    img {
      object-fit: cover;
      object-position: top;
    }
  }
`;

const CaseCard = ({
  isDark = true,
  bg = "secondary",
  img,
  meta = "",
  title = "",
  children = "",
  link,
}) => {
  return (
    <CaseCardStyled>
      <ImgContainer className="img-container">
        <Image src={img} alt="" height={600} width={400} />
        <BtnContainer>
          <Button link={link}>View Project</Button>
        </BtnContainer>
      </ImgContainer>
      <TextContent bg={bg}>
        <Shape bg={bg}>
          <svg height="22" viewBox="0 0 540 22">
            <g>
              <g>
                <path d="M0 0s233.088 28.458 539.999 0c306.91-28.458 0 22 0 22H.06"></path>
              </g>
            </g>
          </svg>
        </Shape>
        <PreTitle color={isDark ? "lightShade" : "darkShade"}>{meta}</PreTitle>
        <TitleStyled color={isDark ? "light" : "dark"}>{title}</TitleStyled>
        <Text color={isDark ? "lightShade" : "darkShade"}>{children}</Text>
      </TextContent>
    </CaseCardStyled>
  );
};

const CaseStudies = () => {
  return (
    <>
      {/* <!-- Content section --> */}
      <Box bg="dark">
        <Container>
          <Row className="justify-content-center">
            <Col
              lg="6"
              md="9"
              className="mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <CaseCard
                img={imgCase1}
                link="/project/njab"
                meta={`Website Development, Content Marketing`}
                title="Giving hope to hopeless romantics"
              >
                Find out about our venture on the lovestruck industry of
                weddings and marriage through our collaboration with Not Just a
                Box Events.
              </CaseCard>
            </Col>
            <Col
              lg="6"
              md="9"
              className="mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-delay="500"
            >
              <CaseCard
                bg="light"
                isDark={false}
                img={imgCase2}
                link="/project/insurance-ko"
                meta={`Website Design & Development, E-commerce, Content Marketing`}
                title="How we???re helping democratise insurance"
              >
                How easy should getting insurance be? In a world of
                uncertainties, it pays well to be prepared. Through our work
                with InsuranceKo, we explore several avenues of how people can
                easily access insurance.
              </CaseCard>
            </Col>
          </Row>
          <Box className="text-center" pt={[4, null, null, null, 4]} pb={5}>
            <Button color="light" link="/projects">
              View Our Works
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CaseStudies;
