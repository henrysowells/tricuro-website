"use client"

import { Canvas } from "@react-three/fiber"
import { ShaderPlane, EnergyRing } from "@/components/ui/background-paper-shaders"

/**
 * Ambient WebGL background for the contact section.
 * Uses ShaderPlane + EnergyRing from background-paper-shaders with
 * Tricuro's navy (#091a2e) and gold (#b8902a) colour palette.
 * Rendered at very low opacity so it doesn't overpower the content.
 */
export function ContactShaderBg() {
  return (
    <Canvas
      className="!absolute inset-0 pointer-events-none"
      camera={{ position: [0, 0, 3], fov: 50 }}
      gl={{ alpha: true, antialias: false }}
    >
      {/* Central gold shimmer plane */}
      <ShaderPlane
        position={[0, 0, 0]}
        color1="#091a2e"
        color2="#b8902a"
      />
      {/* Slow gold energy ring, offset right */}
      <EnergyRing radius={1.4} position={[1.2, -0.4, -0.5]} />
      {/* Smaller ring, offset left */}
      <EnergyRing radius={0.8} position={[-1.0, 0.5, -0.8]} />
    </Canvas>
  )
}
