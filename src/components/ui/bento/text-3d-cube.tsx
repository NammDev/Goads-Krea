"use client";

import { useEffect, useState } from "react";

interface Text3DCubeProps {
  size?: string;
}

/** 3D rotating cube animation for Text to 3D bento card */
export function Text3DCube({ size = "2.5rem" }: Text3DCubeProps) {
  const [rotation, setRotation] = useState({ x: -25, y: 45, offsetY: 16 });

  useEffect(() => {
    let animationId: number;
    let startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;

      // Gentle floating animation
      const rotX = -25 + Math.sin(elapsed * 0.5) * 5;
      const rotY = 45 + elapsed * 20; // Continuous Y rotation
      const offsetY = 16 + Math.sin(elapsed) * 3;

      setRotation({ x: rotX, y: rotY % 360, offsetY });
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const shadowOpacity = 0.7 + Math.sin(rotation.x * 0.1) * 0.2;
  const shadowScale = 0.5 + Math.sin(rotation.x * 0.05) * 0.2;

  return (
    <div
      className="relative mx-auto -mt-1 mb-5 perspective-none"
      style={{ "--size": size, width: size, height: size } as React.CSSProperties}
    >
      {/* Cube container */}
      <div
        className="relative z-10 size-full"
        style={{
          transformStyle: "preserve-3d",
          transform: `translate3d(0px, ${rotation.offsetY}px, 0px) rotateX(${rotation.x}deg)`,
        }}
      >
        <div
          className="relative size-full"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${rotation.y}deg)`,
          }}
        >
          {/* Front face */}
          <div
            className="absolute size-full bg-white"
            style={{
              transform: "rotateY(0deg) translateZ(calc(var(--size)/2))",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="h-full w-full" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }} />
          </div>

          {/* Back face */}
          <div
            className="absolute size-full bg-white"
            style={{
              transform: "rotateY(180deg) translateZ(calc(var(--size)/2))",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="h-full w-full" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }} />
          </div>

          {/* Right face */}
          <div
            className="absolute size-full bg-white"
            style={{
              transform: "rotateY(90deg) translateZ(calc(var(--size)/2))",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="h-full w-full" style={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }} />
          </div>

          {/* Left face */}
          <div
            className="absolute size-full bg-white"
            style={{
              transform: "rotateY(270deg) translateZ(calc(var(--size)/2))",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="h-full w-full" style={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }} />
          </div>

          {/* Top face */}
          <div
            className="absolute size-full bg-white"
            style={{
              transform: "rotateX(90deg) translateZ(calc(var(--size)/2))",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="h-full w-full" style={{ backgroundColor: "rgba(0, 0, 0, 0)" }} />
          </div>

          {/* Bottom face */}
          <div
            className="absolute size-full bg-white"
            style={{
              transform: "rotateX(-90deg) translateZ(calc(var(--size)/2))",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="h-full w-full" style={{ backgroundColor: "rgba(0, 0, 0, 0)" }} />
          </div>
        </div>
      </div>

      {/* Shadow */}
      <div
        className="absolute left-1/2 z-0 h-0 w-[150%] bg-black/10"
        style={{
          boxShadow: `rgba(0, 0, 0, ${shadowOpacity}) 0px 0px 77px 17px`,
          transform: `translate(-50%, 0%) translate3d(0px, 40px, 0px) rotateX(70deg) scale(${shadowScale}, ${shadowScale})`,
          opacity: 0.925,
        }}
      />
    </div>
  );
}
