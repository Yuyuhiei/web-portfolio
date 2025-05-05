// src/components/BubblyBackground.tsx

"use client"; // Essential for components using hooks or browser APIs

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Simple Vertex Shader (Passes position, calculates screen position)
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Fragment Shader (Creates a simple noise/bubble-like pattern)
// This is where the core visual effect logic goes - needs significant customization!
const fragmentShader = `
  uniform float uTime; // Time uniform for animation
  uniform vec2 uMouse; // Mouse position uniform for interaction
  varying vec2 vUv;    // UV coordinates from vertex shader

  // Basic pseudo-random number generator
  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  // Value noise function (simple version)
  float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    vec2 u = f*f*(3.0-2.0*f); // Smoothstep

    return mix( mix( random( i + vec2(0.0,0.0) ),
                     random( i + vec2(1.0,0.0) ), u.x),
                mix( random( i + vec2(0.0,1.0) ),
                     random( i + vec2(1.0,1.0) ), u.x), u.y);
  }

  void main() {
    // Scale UV coordinates and add time/mouse influence for movement
    vec2 scaledUv = vUv * 5.0 + uTime * 0.1 + uMouse * 0.5;

    // Generate noise value
    float n = noise(scaledUv);

    // Create a pattern based on noise (e.g., thresholding for 'bubbles')
    float bubblePattern = step(0.6, n); // Creates hard edges

    // Define colors (adjust as needed)
    vec3 color1 = vec3(0.1, 0.1, 0.15); // Dark background
    vec3 color2 = vec3(0.3, 0.3, 0.8); // Bubble color

    // Mix colors based on the pattern
    vec3 finalColor = mix(color1, color2, bubblePattern);

    // Add some subtle variation based on original UVs
    finalColor += vec3(vUv.x, vUv.y, 1.0) * 0.05;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

// The Scene component containing the shader plane
function ShaderPlane() {
  // Ref to access the mesh object
  const meshRef = useRef<THREE.ShaderMaterial>(null);

  // Uniforms to pass data to the shaders
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0.0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      // Add other uniforms if needed (e.g., resolution)
    }),
    []
  );

  // Update uniforms on each frame
  useFrame((state) => {
    const { clock, mouse } = state;
    if (meshRef.current) {
      meshRef.current.uniforms.uTime.value = clock.getElapsedTime();
      // Map mouse coords from [-1, 1] to [0, 1] or adjust as needed
      meshRef.current.uniforms.uMouse.value.set(mouse.x * 0.5 + 0.5, mouse.y * 0.5 + 0.5);
    }
  });

  return (
    <mesh>
      {/* Plane geometry covers the whole screen */}
      <planeGeometry args={[10, 10]} />
      {/* Shader material using our custom shaders */}
      <shaderMaterial
        ref={meshRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// The main component rendering the Canvas
function BubblyBackground() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        {/* No lights needed for this basic shader example */}
        <ShaderPlane />
      </Canvas>
    </div>
  );
}

export default BubblyBackground;

