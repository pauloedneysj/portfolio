import Image from "next/image";
import { projects } from "./ProjectsWrapper";
import { Locale } from "@/config/i18n-config";

type ProjectListItemProps = {
  lang: Locale;
  project: (typeof projects)[0];
};

export default function ProjectListItem({
  lang,
  project,
}: ProjectListItemProps) {
  return (
    <li className="flex flex-col justify-center items-center max-sm:gap-1 gap-2 max-sm:p-2 p-4 hover:glassmorphism cursor-pointer">
      <h1 className="max-sm:text-2xl text-3xl font-bold text-white">
        {project.title}
      </h1>
      <div
        id={`picture-${project.title}`}
        className="flex h-full typography justify-center items-center"
      ></div>
      <Image
        src={project.image}
        alt="Project image"
        className="md:w-5/6 md:h-max rounded-lg bg-transparent object-center hover:shadow-2xl hover:grayscale-0 grayscale max-sm:grayscale-0"
        placeholder="blur"
        blurDataURL={project.image.blurDataURL}
        priority={true}
      />
      <p className="max-sm:text-xs max-md:text-md text-xl font-bold text-white text-center">
        {project.description}
      </p>
    </li>
  );
}
