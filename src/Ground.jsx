import { MeshReflectorMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import {
  LinearEncoding,
  LinearSRGBColorSpace,
  NoColorSpace,
  RepeatWrapping,
  TextureLoader,
} from "three";
import terrainroughness from "./assets/terrain-roughness.jpg";
import terrainnormal from "./assets/terrain-normal.jpg";
import { useEffect } from "react";

export default function Ground() {
  const [roughness, normal] = useLoader(TextureLoader, [
    terrainroughness,
    terrainnormal,
  ]);
  useEffect(() => {
    [normal, roughness].forEach((t) => {
      t.wrapS = RepeatWrapping;
      t.wrapT = RepeatWrapping;
      t.repeat.set(5, 5);
    });
    normal.colorSpace = LinearSRGBColorSpace;
  }, [normal, roughness]);
  return (
    <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
      <planeGeometry args={[30, 30]} />
      <MeshReflectorMaterial
        envMapIntensity={0}
        normalMap={normal}
        normalScale={[0.15, 0.15]}
        roughnessMap={roughness}
        dithering={true}
        color={[0.015, 0.015, 0.015]}
        roughness={0.7}
        blur={[1000, 400]}
        mixBlur={30}
        mixStrength={80}
        mixContrast={1}
        resolution={1024}
        mirror={0}
        depthScale={0.01}
        minDepthThreshold={0.9}
        maxDepthThreshold={0.25}
        debug={0}
        reflectorOffset={0.2}
      />
    </mesh>
  );
}
