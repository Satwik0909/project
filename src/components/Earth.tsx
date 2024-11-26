import { OrbitControls, Sphere } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import * as THREE from 'three';

const Earth: React.FC = () => {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = clock.getElapsedTime() * 0.12;
    }
  });

  return (
    <>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={0}
        maxPolarAngle={Math.PI}
      />
      {/* Increased ambient light intensity */}
      <ambientLight intensity={1.2} />
      
      {/* Added more directional lights with higher intensity */}
      <directionalLight position={[5, 3, 5]} intensity={3} />
      <directionalLight position={[-5, -3, -5]} intensity={2} />
      <directionalLight position={[0, 0, 5]} intensity={2.5} />
      
      {/* Added point lights for extra illumination */}
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.8} />
      
      <mesh ref={earthRef}>
        <Sphere args={[0.8, 64, 64]}>
          <meshPhongMaterial
            map={new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg')}
            bumpMap={new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg')}
            bumpScale={0.03}
            specularMap={new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg')}
            specular={new THREE.Color('white')}
            shininess={30}
            emissive={new THREE.Color('#112244')}
            emissiveIntensity={0.1}
          />
        </Sphere>
      </mesh>
      <mesh ref={cloudsRef}>
        <Sphere args={[0.81, 64, 64]}>
          <meshPhongMaterial
            map={new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png')}
            transparent={true}
            opacity={0.2}
            depthWrite={false}
          />
        </Sphere>
      </mesh>
    </>
  );
};

export default Earth;