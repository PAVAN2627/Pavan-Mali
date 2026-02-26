import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const count = 120;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
      ] as [number, number, number],
      speed: 0.002 + Math.random() * 0.005,
      offset: Math.random() * Math.PI * 2,
    }));
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    particles.forEach((p, i) => {
      dummy.position.set(
        p.position[0] + Math.sin(t * p.speed * 50 + p.offset) * 0.5,
        p.position[1] + Math.cos(t * p.speed * 30 + p.offset) * 0.5,
        p.position[2]
      );
      dummy.scale.setScalar(0.03 + Math.sin(t + p.offset) * 0.015);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#0ea5e9" transparent opacity={0.4} />
    </instancedMesh>
  );
}

function GridLines() {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.1) * 0.02;
    }
  });

  const lines = useMemo(() => {
    const lineData: { start: [number, number, number]; end: [number, number, number] }[] = [];
    for (let i = -10; i <= 10; i += 2) {
      lineData.push({ start: [i, -10, -2], end: [i, 10, -2] });
      lineData.push({ start: [-10, i, -2], end: [10, i, -2] });
    }
    return lineData;
  }, []);

  return (
    <group ref={ref}>
      {lines.map((line, i) => {
        const points = [
          new THREE.Vector3(...line.start),
          new THREE.Vector3(...line.end),
        ];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <line key={i}>
            <bufferGeometry attach="geometry" {...geometry} />
            <lineBasicMaterial attach="material" color="#0ea5e9" transparent opacity={0.06} />
          </line>
        );
      })}
    </group>
  );
}

function FloatingCubes() {
  const count = 8;
  const meshRef = useRef<THREE.Group>(null);

  const cubes = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 6 - 2,
      ] as [number, number, number],
      rotation: Math.random() * Math.PI,
      speed: 0.2 + Math.random() * 0.4,
      scale: 0.15 + Math.random() * 0.25,
    }));
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.children.forEach((child, i) => {
      const cube = cubes[i];
      child.rotation.x = t * cube.speed * 0.5 + cube.rotation;
      child.rotation.y = t * cube.speed * 0.3;
      child.position.y = cube.position[1] + Math.sin(t * cube.speed + cube.rotation) * 0.8;
    });
  });

  return (
    <group ref={meshRef}>
      {cubes.map((cube, i) => (
        <mesh key={i} position={cube.position} scale={cube.scale}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color="#0ea5e9" transparent opacity={0.08} wireframe />
        </mesh>
      ))}
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Particles />
        <GridLines />
        <FloatingCubes />
      </Canvas>
    </div>
  );
}
