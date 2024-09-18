import Button from "@/components/ui/Button";
import { Locale } from "@/config/i18n-config";
import { getDictionaryUseClient } from "@/dictionaries/get-dictionary-use-client";
import { useEffect, useState } from "react";
import { FaArrowTurnDown } from "react-icons/fa6";
import Image, { StaticImageData } from "next/image";

import lacetiMockup from "@/img/projects/laceti.webp";
import plugowMockup from "@/img/projects/plugow.webp";
import m3sMockup from "@/img/projects/m3s.webp";
import TechnologyList from "@/components/layout/TechnologyList";

type ProjectsProps = {
  lang: Locale;
};

function getMockupByProjectName(projectName: string) {
  switch (projectName) {
    case "LaCETI Website":
      return lacetiMockup;
    case "Plugow":
      return plugowMockup;
    case "M3S":
      return m3sMockup;
    default:
      return null;
  }
}

export default function ProjectList({ lang }: ProjectsProps) {
  const { list: projects, projectsButtonName } =
    getDictionaryUseClient(lang).modal.projects;

  const [onMount, setOnMount] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOnMount(false);
    }, 5000);
  });

  return (
    <div id="projects-list" className="flex flex-col gap-8 px-20 max-sm:px-10">
      <div
        className={`fixed flex-col gap-6 items-center max-[1080px]:right-8 right-20 bottom-8 max-sm:hidden scroll-hint-opacity ${
          onMount ? "" : "hidden"
        }`}
      >
        <FaArrowTurnDown className="animate-bounce w-12 h-12 max-[1080px]:w-8 max-[1080px]:h-8 text-typography" />
      </div>
      {projects.map((project) => (
        <div
          key={project.name}
          className="flex w-full justify-center gap-20 max-[900px]:flex-col max-[900px]:items-center max-[900px]:gap-8"
        >
          <Image
            src={getMockupByProjectName(project.name) as StaticImageData}
            alt={`${project.name} image`}
            priority={true}
            className="w-6/12 max-[900px]:w-3/6 object-scale-down"
          />

          <div className="flex flex-col items-start justify-center gap-8 h-[75vh] max-[900px]:h-max max-[900px]:items-center">
            <p className="text-3xl text-typography">{project.name}</p>
            <p className="text-md text-typography">{project.description}</p>
            <div className="w-full flex max-sm:flex-col items-center gap-8">
              <Button
                title={projectsButtonName}
                onClick={() => window.open(project.link, "_blank")}
              />
              <TechnologyList stack={project.stack} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
