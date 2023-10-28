import { Locale } from "@/config/i18n-config";
import { getDictionaryUseClient } from "@/dictionaries/get-dictionary-use-client";
import projectImage from "@/img/projects/Captura de tela 2023-10-25 152531.png";
import ProjectList from "./ProjectList";

type ProjectsProps = {
  lang: Locale;
};

export const projects = [
  {
    title: "Next.js",
    description:
      "Portfolio created by Paulo Edney with Next.js and Tailwind CSS",
    image: projectImage,
  },
  {
    title: "Tailwind CSS",
    description:
      "Portfolio created by Paulo Edney with Next.js and Tailwind CSS",
    image: projectImage,
  },
  {
    title: "React",
    description:
      "Portfolio created by Paulo Edney with Next.js and Tailwind CSS",
    image: projectImage,
  },
  {
    title: "TypeScript",
    description:
      "Portfolio created by Paulo Edney with Next.js and Tailwind CSS",
    image: projectImage,
  },
  {
    title: "JavaScript",
    description:
      "Portfolio created by Paulo Edney with Next.js and Tailwind CSS",
    image: projectImage,
  },
];

export default function ProjectsWrapper({ lang }: ProjectsProps) {
  const dict = getDictionaryUseClient(lang);

  return (
    <div className="flex flex-col items-center h-full">
      <h1 className="flex-shrink max-sm:text-2xl text-4xl font-bold text-white">
        {dict.navbar.projects}
      </h1>
      <ProjectList lang={lang} projects={projects} />
    </div>
  );
}
