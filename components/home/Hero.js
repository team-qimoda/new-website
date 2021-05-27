import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import styled from "styled-components";
// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
// import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { OrbitControls, Environment } from "@react-three/drei";
import theme from "lib/theme";

const CanvasContainer = styled.div`
  height: 600px;
  width: 100%;
  background-color: ${theme.global.colors.brand};
`;

// const Scene = () => {
//   const materials = useLoader(MTLLoader, "/obj/other/butter.mtl");
//   const obj = useLoader(OBJLoader, "/obj/other/butter.obj", (loader) => {
//     console.log(materials);
//     materials.preload();
//     loader.setMaterials(materials);
//   });
//   return (
//     <primitive
//       object={obj}
//       scale={0.3}
//       position={[0, -1, 0]}
//       rotation={[-Math.PI / 2, 0, 0]}
//     />
//   );
// };

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/obj/other/scene.gltf");
  return (
    <>
      <primitive
        object={gltf.scene}
        scale={0.375}
        position={[0, -1.6, 0.5]}
        // rotation={[-Math.PI / 2, 0, 0]}
      />
    </>
  );
};

const Hero = () => {
  return (
    <CanvasContainer>
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
        </Suspense>
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.3} position={[0, 12, 7.5]} />
        <directionalLight intensity={0.3} position={[0, 12, -7.5]} />
      </Canvas>
    </CanvasContainer>
  );
};

export default Hero;
