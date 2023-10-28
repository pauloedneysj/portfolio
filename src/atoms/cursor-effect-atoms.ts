import { atom } from "jotai";

type ScreenCoordsProps = {
  x: number;
  y: number;
};

export const screenCoordsAtom = atom<ScreenCoordsProps>({ x: 0, y: 0 });
