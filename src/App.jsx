import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";

const Scene = () => {
  const boxRef = useRef();
  useFrame((state, delta) => {
    boxRef.current.rotation.y += 0.02;
    boxRef.current.rotation.z += 0.02;
    boxRef.current.rotation.x += 0.02;

  });

  return (
    <>
      <Box ref={boxRef} args={[1, 1, 1]} rotation={[0.5, 0, 0]}>
        <meshNormalMaterial />
      </Box>
      <ambientLight />
    </>
  );
};

const App = () => {
  return (
    <Canvas camera={{ fov: 70, position: [5, 0, 3] }}>
      <OrbitControls />
      <Scene />
      {/* <Box /> */}
    </Canvas>
  );
};

export default App;
