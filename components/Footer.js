import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  // height: 100px;
  // border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-left: 0.5rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const FooterLogo = styled.img`
  height: 1em;
`;

const Footer = () => {
  return (
    <StyledFooter>
      {/* <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <FooterLogo src="/vercel.svg" alt="Vercel Logo" />
      </a> */}
    </StyledFooter>
  );
};

export default Footer;
