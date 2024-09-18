"use client";

import { screenCoordsAtom } from "@/atoms/cursor-effect-atoms";
import { useAtomValue } from "jotai";

export default function CursorEffect() {
  const screenCoords = useAtomValue(screenCoordsAtom);

  return (
    <div
      id="cursor-effect"
      style={{
        top: `${screenCoords.y}px`,
        left: `${screenCoords.x}px`,
      }}
      className="absolute overflow-hidden w-[40rem] h-[40rem] max-sm:hidden cursor-shine-effect pointer-events-none"
    />
  );
}
