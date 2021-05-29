import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import styled from "styled-components";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useMediaQuery } from "react-responsive";
// import { OrbitControls, Environment } from "@react-three/drei";
import useScrollPosition from "@react-hook/window-scroll";

const CanvasContainer = styled.div`
  top: 70px;
  position: sticky;
  height: 50%;
  width: 100%;
`;

const Model = ({ isTabletOrMobile, scrollPos }) => {
  const gltf = useLoader(GLTFLoader, "/obj/other/scene.gltf");
  console.log(scrollPos);
  const scrollRatio = scrollPos / (window.innerHeight + 70);
  const rotationOffset = isTabletOrMobile ? 0.2 : 0.15;
  const maxRotation = 1 + rotationOffset;
  const rotation =
    scrollRatio < maxRotation ? scrollRatio + rotationOffset : maxRotation;
  return (
    <>
      <primitive
        object={gltf.scene}
        scale={isTabletOrMobile ? 0.3 : 0.375}
        position={[0, isTabletOrMobile ? -0.8 : -1.3, 0.5]}
        rotation={[rotation, 0, 0]}
      />
    </>
  );
};

const Hero = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const scrollY = useScrollPosition(80);
  return (
    <CanvasContainer>
      <Canvas>
        <Suspense fallback={null}>
          <Model isTabletOrMobile={isTabletOrMobile} scrollPos={scrollY} />
          {/* <OrbitControls /> */}
        </Suspense>
        <ambientLight intensity={0.1} />
      </Canvas>
    </CanvasContainer>
  );
};

export default Hero;
