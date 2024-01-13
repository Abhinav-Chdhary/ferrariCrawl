import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";

function CarShow() {
  return null;
}

export default function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  );
}
