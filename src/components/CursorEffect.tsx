type CursorEffectProps = {
  coords: { x: number; y: number };
};

export default function CursorEffect({ coords }: CursorEffectProps) {
  return (
    <div
      id="cursor-effect"
      style={{
        top: `${coords.y}px`,
        left: `${coords.x}px`,
      }}
      className="shine-effect w-96 h-96"
    />
  );
}
