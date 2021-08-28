import Layout from "components/Layout";
import Hero from "components/home/Hero";
import styles from "styles/Home.module.css";
import styled from "styled-components";
import theme from "lib/theme";

const OrangeBg = styled.div`
  width: 100%;
  height: 200vh;
  background-color: ${theme.global.colors.brand};
  // background-color: blue;
`;
export default function Home() {
  return (
    <Layout>
      <OrangeBg>
        <Hero />
      </OrangeBg>
    </Layout>
  );
}
