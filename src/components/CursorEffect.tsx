"use client";

import { useState } from "react";

export default function CursorEffect() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: { clientX: number; clientY: number }) => {
    const x = event.clientX - 182;
    const y = event.clientY - 182;
    setCoords({ x, y });
  };

  return (
    <div
      id="cursor-effect"
      onMouseMove={handleMouseMove}
      style={{
        top: `${coords.y}px`,
        left: `${coords.x}px`,
      }}
      className="absolute overflow-hidden w-96 h-96 max-sm:hidden cursor-shine-effect"
    />
  );
}
