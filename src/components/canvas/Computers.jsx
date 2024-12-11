import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ deviceType }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // Dynamically adjust the scale and position based on the device type
  const config = {
    "mini-mobile": { scale: 0.5, position: [0, -3, -2.5] },
    mobile: { scale: 0.6, position: [0, -3.5, -2.2] },
    tablet: { scale: 0.7, position: [0, -4, -1.5] },
    desktop: { scale: 0.85, position: [0, -5, -0.75] },
  };

  const { scale, position } = config[deviceType] || config.desktop;

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={scale}
        position={position}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    // Breakpoints for different screen sizes
    const updateDeviceType = () => {
      const width = window.innerWidth;
      if (width <= 400) setDeviceType("mini-mobile");
      else if (width > 400 && width <= 640) setDeviceType("mobile");
      else if (width > 640 && width <= 1024) setDeviceType("tablet");
      else setDeviceType("desktop");
    };

    // Check initial width
    updateDeviceType();

    // Add resize event listener
    window.addEventListener("resize", updateDeviceType);

    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers deviceType={deviceType} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
