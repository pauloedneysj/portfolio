import { Locale } from "@/config/i18n-config";
import { projects } from "./ProjectsWrapper";
import { getDictionaryUseClient } from "@/dictionaries/get-dictionary-use-client";
import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProjectListItem from "./ProjectListItem";

type ProjectsProps = {
  lang: Locale;
  projects: typeof projects;
};

export default function ProjectList({ lang, projects }: ProjectsProps) {
  const dict = getDictionaryUseClient(lang);
  var sm = window.matchMedia("(max-width: 640px)").matches;
  var md = window.matchMedia("(max-width: 768px)").matches;
  let onMount = true;

  const [projectsPerPage, setProjectsPerPage] = useState(projects);
  const [page, setPage] = useState(1);
  const [isForward, setIsForward] = useState(false);
  const [isBackward, setIsBackward] = useState(false);
  const itemsPerPage = sm ? 1 : md ? 2 : 3;

  const nextPagination = () => {
    const totalPages = Math.ceil(projects.length / itemsPerPage);
    const nextPage = page + 1;

    if (nextPage <= totalPages) {
      onMount = false;

      const startIndex = (nextPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setProjectsPerPage(projects.slice(startIndex, endIndex));
      setPage(nextPage);

      setIsBackward(false);
      setIsForward(true);
    }
  };

  const prevPagination = () => {
    const prevPage = page - 1;

    if (prevPage >= 1) {
      const startIndex = (prevPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setProjectsPerPage(projects.slice(startIndex, endIndex));
      setPage(prevPage);
    }

    setIsForward(false);
    setIsBackward(true);
  };

  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setProjectsPerPage(projects.slice(startIndex, endIndex));
  }, [isBackward, isForward, itemsPerPage, page, projects]);

  return (
    <ul className="flex flex-grow flex-row gap-2 justify-between items-center">
      <IoIosArrowBack
        className={`cursor-pointer ${
          page === 1 ? "text-zinc-700" : "text-white"
        }`}
        size={40}
        onClick={prevPagination}
      />
      <div
        className={`flex flex-1 ${onMount && "animate-on-mount"} 
        ${isForward && "animate-move-forward"}${
          isBackward && "animate-move-backward"
        }`}
      >
        {projectsPerPage.map((project, index) => (
          <ProjectListItem key={index} project={project} />
        ))}
      </div>
      <IoIosArrowForward
        className={`cursor-pointer ${
          page === Math.ceil(projects.length / itemsPerPage)
            ? "text-zinc-700"
            : "text-white"
        }`}
        size={40}
        onClick={nextPagination}
      />
    </ul>
  );
}
