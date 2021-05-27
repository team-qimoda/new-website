import styled from "styled-components";

const LogoImage = styled.img`
  width: 60%;
  height: 60%;
  z-index: 1;
  position: relative;
`;

const LogoBg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  animation-name: spin;
  animation-duration: 8000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  left: 0;
  top: 0;
  z-index: 0;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const LogoStarOne = styled.img`
  transition: 0.3s;
  width: 15%;
  height: 15%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${({ isSmall }) => (isSmall ? "0" : "1")};
`;

const LogoStarTwo = styled.img`
  transition: 0.3s;
  width: 15%;
  height: 15%;
  position: absolute;
  bottom: 0;
  right: 0;
  opacity: ${({ isSmall }) => (isSmall ? "0" : "1")};
`;

const LogoContainer = styled.div`
  transition: 0.3s;
  width: ${({ isSmall }) => (isSmall ? "60px" : "80px")};
  height: ${({ isSmall }) => (isSmall ? "60px" : "80px")};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = ({ isSmall }) => {
  return (
    <LogoContainer isSmall={isSmall}>
      <LogoImage src="/logo/letter.svg" alt="Qimoda" />
      <LogoBg src="/logo/starbg.svg" />
      <LogoStarOne isSmall={isSmall} src="/logo/14.svg" />
      <LogoStarTwo isSmall={isSmall} src="/logo/13.svg" />
    </LogoContainer>
  );
};

export default Logo;
