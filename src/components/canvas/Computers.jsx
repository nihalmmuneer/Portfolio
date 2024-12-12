import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, isWebGLAvailable } from "@react-three/drei";

const CanvasLoader = () => (
  <div style={{ textAlign: "center", marginTop: "20px", color: "white" }}>
    Loading...
  </div>
);

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF(
    isMobile ? "./desktop_pc_low_poly/scene.gltf" : "./desktop_pc/scene.gltf",
    true
  );

  return (
    <primitive
      object={scene}
      scale={isMobile ? 0.7 : 0.75}
      position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
    />
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateMobileState = () => setIsMobile(window.innerWidth <= 500);
    updateMobileState();
    window.addEventListener("resize", updateMobileState);
    return () => window.removeEventListener("resize", updateMobileState);
  }, []);

  if (!isWebGLAvailable()) {
    return <CanvasLoader />;
  }

  return (
    <Canvas
      frameloop="demand"
      shadows={isMobile ? false : true}
      dpr={[1, Math.min(window.devicePixelRatio, 2)]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ antialias: !isMobile, preserveDrawingBuffer: false }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
