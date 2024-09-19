import { useCallback } from "react";

type HandleWheelProps = {
  contentRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  projectsLength: number;
};

export default function useHandleWheel({
  contentRefs,
  currentIndex,
  setCurrentIndex,
  projectsLength,
}: HandleWheelProps) {
  // Scroll to the specific project index
  const scrollToProject = useCallback(
    (index: number) => {
      if (contentRefs.current[index]) {
        contentRefs.current[index]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setCurrentIndex(index); // Update the current index
      }
    },
    [contentRefs, setCurrentIndex]
  );

  // Handle mouse wheel scroll
  const handleWheel = useCallback(
    (event: React.WheelEvent) => {
      if (event.deltaY > 0) {
        // Scrolling down
        if (currentIndex < projectsLength - 1) {
          scrollToProject(currentIndex + 1);
        }
      } else {
        // Scrolling up
        if (currentIndex > 0) {
          scrollToProject(currentIndex - 1);
        }
      }
    },
    [currentIndex, scrollToProject, projectsLength]
  );

  return handleWheel; // Return the handler for use in the component
}
