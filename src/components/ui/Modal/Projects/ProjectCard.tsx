import Image, { StaticImageData } from "next/image";
import { forwardRef } from "react";
import Button from "@/components/ui/Button";
import TechnologyList from "@/components/ui/Modal/Projects/TechnologyList";

// Helper to get the correct image based on project name
function getMockupByProjectName(projectName: string): StaticImageData | null {
  switch (projectName) {
    case "LaCETI Website":
      return require("@/img/projects/laceti.webp");
    case "Plugow":
      return require("@/img/projects/plugow.webp");
    case "M3S":
      return require("@/img/projects/m3s.webp");
    default:
      return null;
  }
}

const ProjectCard = forwardRef<HTMLDivElement, any>(
  ({ project, buttonName }, ref) => (
    <div
      ref={ref}
      className="flex w-full justify-center gap-20 max-[900px]:flex-col max-[900px]:items-center max-[900px]:gap-8 max-md:my-16"
    >
      <Image
        src={getMockupByProjectName(project.name) as StaticImageData}
        alt={`${project.name} image`}
        priority={true}
        className="w-6/12 max-[900px]:w-3/6 object-scale-down"
      />

      <div className="flex flex-col items-start justify-center gap-8 h-[75vh] max-[900px]:h-max max-[900px]:items-center max-sm:max-w-xs">
        <p className="text-3xl text-typography break-words">{project.name}</p>
        <p className="text-md text-typography break-words">
          {project.description}
        </p>
        <div className="flex max-sm:flex-col items-center gap-8">
          <Button
            title={buttonName}
            onClick={() => window.open(project.link, "_blank")}
          />
          <TechnologyList stack={project.stack} />
        </div>
      </div>
    </div>
  )
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
