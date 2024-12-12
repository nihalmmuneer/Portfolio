import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// Loader component to display while loading assets
const CanvasLoader = () => (
  <div style={{ textAlign: "center", marginTop: "20px", color: "white" }}>
    Loading...
  </div>
);

// Computers component to load and position the GLTF model
const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf", true);

  return (
    <primitive
      object={scene}
      scale={isMobile ? 0.7 : 0.75}
      position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
    />
  );
};

// Canvas wrapper for rendering the scene
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const updateMobileState = () => setIsMobile(window.innerWidth <= 500);
    updateMobileState();
    window.addEventListener("resize", updateMobileState);
    return () => window.removeEventListener("resize", updateMobileState);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      {isLoading && <CanvasLoader />}
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, window.devicePixelRatio || 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ antialias: true, preserveDrawingBuffer: false }}
        onCreated={() => setIsLoading(false)}
      >
        <Suspense fallback={null}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
