import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "components/Header";
import Footer from "components/Footer";
import styled from "styled-components";

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div>
      <Head>
        <title>Qimoda - Great things in small packages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!loading && <Header />}

      <Main>{children}</Main>

      <Footer />
    </div>
  );
};

export default Layout;
