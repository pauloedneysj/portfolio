"use client";

import { useState } from "react";

type CursorEffectProps = {
  children: React.ReactNode;
};

export default function CursorEffect({ children }: CursorEffectProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: { clientX: number; clientY: number }) => {
    const x = event.clientX - 320;
    const y = event.clientY - 320;
    setCoords({ x, y });
  };

  return (
    <div className="absolute w-full h-full" onMouseMove={handleMouseMove}>
      <div
        id="cursor-effect"
        style={{
          top: `${coords.y}px`,
          left: `${coords.x}px`,
        }}
        className="absolute overflow-hidden w-[40rem] h-[40rem] max-sm:hidden cursor-shine-effect z-50"
      />
      {children}
    </div>
  );
}
