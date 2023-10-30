import { Locale } from "@/config/i18n-config";
import { projects } from "./ProjectsWrapper";
import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProjectListItem from "./ProjectListItem";

type ProjectsProps = {
  lang: Locale;
  projects: typeof projects;
};

export default function ProjectList({ lang, projects }: ProjectsProps) {
  var sm = window.matchMedia("(max-width: 640px)").matches;
  var md = window.matchMedia("(max-width: 768px)").matches;

  const [onMount, setOnMount] = useState(true);
  const [projectsPerPage, setProjectsPerPage] = useState(projects);
  const [page, setPage] = useState(1);
  const [isNext, setIsNext] = useState(false);
  const [isPrev, setIsPrev] = useState(false);
  const itemsPerPage = sm ? 1 : md ? 2 : 3;

  const nextPagination = () => {
    const totalPages = Math.ceil(projects.length / itemsPerPage);
    const nextPage = page + 1;

    if (nextPage <= totalPages) {
      const startIndex = (nextPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      setProjectsPerPage(projects.slice(startIndex, endIndex));
      setPage(nextPage);
      setOnMount(false);
      setIsPrev(false);
      setIsNext(true);
    }
  };

  const prevPagination = () => {
    const prevPage = page - 1;
    setOnMount(false);

    if (prevPage >= 1) {
      const startIndex = (prevPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setProjectsPerPage(projects.slice(startIndex, endIndex));
      setPage(prevPage);
    }

    setIsNext(false);
    setIsPrev(true);
  };

  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setProjectsPerPage(projects.slice(startIndex, endIndex));
  }, [itemsPerPage, page, projects]);

  useEffect(() => {
    if (isNext) {
      setTimeout(() => {
        setIsNext(false);
      }, 1000);
    }
  }, [isNext]);

  useEffect(() => {
    if (isPrev) {
      setTimeout(() => {
        setIsPrev(false);
      }, 1000);
    }
  }, [isPrev]);

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
        className={`flex flex-1
        ${onMount && "animate-on-mount"}
        ${isNext && "animate-slide-right"}
        ${isPrev && "animate-slide-left"}`}
      >
        {projectsPerPage.map((project, index) => (
          <ProjectListItem key={index} lang={lang} project={project} />
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
