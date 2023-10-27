import Image from "next/image";
import Picture from "@/img/projects/Captura de tela 2023-10-25 152531.png";
import { useEffect, useState } from "react";
import { Locale } from "@/config/i18n-config";
import { getDictionaryUseClient } from "@/dictionaries/get-dictionary-use-client";

type ProjectsProps = {
  lang: Locale;
};

const projects = [
  {
    title: "Next.js",
    description:
      "Portfolio created by Paulo Edney with Next.js and Tailwind CSS",
    Image,
  },
  {
    title: "Tailwind CSS",
    description:
      "Portfolio created by Paulo Edney with Next.js and Tailwind CSS",
    Image,
  },
  {
    title: "React",
    description:
      "Portfolio created by Paulo Edney with Next.js and Tailwind CSS",
    Image,
  },
  {
    title: "TypeScript",
    description:
      "Portfolio created by Paulo Edney with Next.js and Tailwind CSS",
    Image,
  },
];

export default function Projects({ lang }: ProjectsProps) {
  const dict = getDictionaryUseClient(lang);

  const [projectsPerPage, setProjectsPerPage] = useState(projects);
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  const nextPagination = () => {
    const totalPages = Math.ceil(projects.length / itemsPerPage);
    const nextPage = page + 1;
    if (nextPage <= totalPages) {
      const startIndex = (nextPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setProjectsPerPage(projects.slice(startIndex, endIndex));
      setPage(nextPage);
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
  };

  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setProjectsPerPage(projects.slice(startIndex, endIndex));
  }, [page]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-white mb-36">
        {dict.navbar.projects}
      </h1>

      <ul className="flex flex-row w-10/12 h-4/6 justify-around mb-16">
        {projectsPerPage.map((project, index) => (
          <li
            key={index}
            className="flex flex-col justify-center items-center hover:glassmorphism cursor-pointer"
          >
            <h1 className="text-3xl font-bold text-white">{project.title}</h1>
            <section
              id={`picture-${project.title}`}
              className="flex w-[1px] h-full bg-zinc-900 justify-center items-center"
            >
              <Image
                src={Picture}
                alt="My picture"
                className="md:w-60 md:h-60 rounded-lg object-cover hover:shadow-2xl hover:grayscale-0 grayscale"
                priority
              />
            </section>
            <p className="text-xl font-bold text-white">
              {project.description}
            </p>
          </li>
        ))}
      </ul>

      <button className="text-xl font-bold text-white" onClick={prevPagination}>
        Prev
      </button>
      <button className="text-xl font-bold text-white" onClick={nextPagination}>
        Next
      </button>
    </div>
  );
}
