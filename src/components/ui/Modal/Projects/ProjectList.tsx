import { useRef, useState, useEffect, useMemo } from "react";
import { Locale } from "@/config/i18n-config";
import { getDictionaryUseClient } from "@/dictionaries/get-dictionary-use-client";
import useHandleWheel from "@/hooks/useHandleWheel";
import useDebounce from "@/hooks/useDebounce";
import ProjectCard from "./ProjectCard";
import ScrollHint from "../../../layout/ScrollHint";

type ProjectsProps = {
  lang: Locale;
};

export default function ProjectList({ lang }: ProjectsProps) {
  const { list: projects, projectsButtonName } =
    getDictionaryUseClient(lang).modal.projects;

  const [onMount, setOnMount] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const handleWheel = useHandleWheel({
    contentRefs,
    currentIndex,
    setCurrentIndex,
    projectsLength: projects.length,
  });
  const debouncedHandleWheel = useDebounce(handleWheel, 100);

  // Remove scroll hint after 5 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setOnMount(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  const projectCards = useMemo(
    () =>
      projects.map((project, index) => (
        <ProjectCard
          key={project.name}
          project={project}
          ref={(el) => (contentRefs.current[index] = el)}
          buttonName={projectsButtonName}
        />
      )),
    [projects, projectsButtonName]
  );

  return (
    <div
      id="projects-list"
      className="flex flex-col gap-8 px-20 max-sm:px-10 overflow-x-hidden"
      onWheel={debouncedHandleWheel}
    >
      <ScrollHint isVisible={onMount} />
      {projectCards}
    </div>
  );
}
