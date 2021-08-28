import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import styled from "styled-components";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useMediaQuery } from "react-responsive";
// import { OrbitControls, Environment } from "@react-three/drei";
import { breakpoints } from "utils";

const CanvasContainer = styled.div`
  top: 70px;
  position: sticky;
  height: 300px;
  width: 100%;
  overflow: hidden;

  @media (min-width: ${breakpoints.lg}px) {
    height: 100%;
  }
`;

const Model = ({ isTabletOrMobile }) => {
  const gltf = useLoader(GLTFLoader, "/obj/other/scene-sample.gltf");
  const yInitialVal = isTabletOrMobile ? -2.3 : -2.2;
  const modelRef = useRef();
  useFrame(() => {
    modelRef.current.rotation.y -= 0.0035;
  });
  return (
    <>
      <primitive
        ref={modelRef}
        object={gltf.scene}
        scale={0.5}
        position={[0, yInitialVal, 0]}
        rotation={[0, 0, 0]}
      />
    </>
  );
};

const Illustration = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      <CanvasContainer>
        <Canvas>
          <Suspense fallback={null}>
            <Model isTabletOrMobile={isTabletOrMobile} />
            {/* <OrbitControls /> */}
          </Suspense>
          <ambientLight intensity={0.1} />
        </Canvas>
      </CanvasContainer>
    </>
  );
};

export default Illustration;
