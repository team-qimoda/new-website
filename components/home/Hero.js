import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import styled from "styled-components";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useMediaQuery } from "react-responsive";
// import { OrbitControls, Environment } from "@react-three/drei";
import useScrollPosition from "@react-hook/window-scroll";
import theme from "lib/theme";

const CanvasContainer = styled.div.attrs((props) => ({
  style: {
    opacity: props.opacity,
  },
}))`
  top: 70px;
  position: sticky;
  height: 50%;
  width: 100%;
  overflow: hidden;
`;

const BrownBackground = styled.div`
  width: 100%;
  height: 50%;
  background-color: ${theme.global.colors.darkBrown};
  // background-color: pink;
`;

const Model = ({ isTabletOrMobile, scrollPos }) => {
  const gltf = useLoader(GLTFLoader, "/obj/other/scene.gltf");
  const scrollRatio = (scrollPos * 3.2) / (window.innerHeight + 70);
  const limitedScrollRatio = scrollRatio <= 1.6 ? scrollRatio : 1.6;
  const secondHalfRatio = scrollRatio > 1.6 ? scrollRatio - 1.6 : 0;
  const yInitialVal = isTabletOrMobile ? -0.8 : -1.4;
  return (
    <>
      <primitive
        object={gltf.scene}
        scale={isTabletOrMobile ? 0.3 : 0.375}
        position={[
          0,
          yInitialVal + limitedScrollRatio,
          secondHalfRatio - limitedScrollRatio - 0.5,
        ]}
        rotation={[limitedScrollRatio, 0, 0]}
      />
    </>
  );
};

const Hero = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [windowHeight, setWindowHeight] = useState(0);
  const scrollY = useScrollPosition(80);
  const scrollRatio = (scrollY * 3.2) / (windowHeight + 70);
  const secondHalfRatio = scrollRatio > 1.6 ? scrollRatio - 1.6 : 0;
  const opacityPercentage =
    secondHalfRatio < 1.6 ? 1 - (secondHalfRatio * 2) / 1.6 : 0;

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);
  return (
    <>
      <CanvasContainer opacity={opacityPercentage}>
        <Canvas>
          <Suspense fallback={null}>
            <Model isTabletOrMobile={isTabletOrMobile} scrollPos={scrollY} />
            {/* <OrbitControls /> */}
          </Suspense>
          <ambientLight intensity={0.1} />
        </Canvas>
      </CanvasContainer>
      <BrownBackground></BrownBackground>
    </>
  );
};

export default Hero;
