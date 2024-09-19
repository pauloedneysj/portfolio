import { useRef } from "react";

export default function useDebounce(fn: Function, delay: number) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debouncedFn = (...args: any[]) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      fn(...args);
    }, delay);
  };

  return debouncedFn;
}
