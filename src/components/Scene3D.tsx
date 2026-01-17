import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Stars, TorusKnot } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const AnimatedShape = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Sphere visible args={[1, 100, 200]} scale={2} ref={meshRef}>
            <MeshDistortMaterial
                color="#00f3ff"
                attach="material"
                distort={0.5}
                speed={2}
                roughness={0}
                metalness={0.8}
                wireframe
            />
        </Sphere>
    );
};

const NeonRing = () => {
    const ringRef = useRef<THREE.Mesh>(null);
    useFrame((state) => {
        if (ringRef.current) {
            ringRef.current.rotation.z += 0.01;
        }
    });

    return (
        <TorusKnot ref={ringRef} args={[9, 0.4, 1080, 100, 3, 7]} position={[0, 0, -5]}>
            <meshStandardMaterial color="#7000ff" emissive="#7000ff" emissiveIntensity={2} toneMapped={false} />
        </TorusKnot>
    )
}

const Scene3D = () => {
    return (
        <div className="absolute inset-0 -z-10 bg-black">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#00f3ff" />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <AnimatedShape />
                <NeonRing />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
};

export default Scene3D;
