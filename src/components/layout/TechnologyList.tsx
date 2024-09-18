import React from "react";
import { IconType } from "react-icons";
import {
  FaWordpress,
  FaPhp,
  FaDocker,
  FaReact,
  FaAws,
  FaNode,
  FaFigma,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiStorybook,
  SiMqtt,
  SiMongodb,
  SiSvelte,
  SiPrisma,
  SiVercel,
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";

type TechnologyIconProps = {
  name: string;
  link: string;
};

const TechnologyIcon: React.FC<TechnologyIconProps> = ({ name, link }) => {
  const IconComponent = (): IconType | undefined => {
    switch (name) {
      case "WordPress":
        return FaWordpress;
      case "PHP":
        return FaPhp;
      case "Docker":
        return FaDocker;
      case "React":
        return FaReact;
      case "AWS":
        return FaAws;
      case "Node":
        return FaNode;
      case "Figma":
        return FaFigma;
      case "TypeScript":
        return SiTypescript;
      case "Storybook":
        return SiStorybook;
      case "GraphQL":
        return GrGraphQl;
      case "Mqtt":
        return SiMqtt;
      case "MongoDB":
        return SiMongodb;
      case "Svelte":
        return SiSvelte;
      case "PostgreSQL":
        return BiLogoPostgresql;
      case "Prisma":
        return SiPrisma;
      case "GitHub":
        return FaGithub;
      case "Vercel":
        return SiVercel;
      default:
        return undefined;
    }
  };

  const SwitchedIcon = IconComponent();

  if (!SwitchedIcon) {
    return null;
  }

  return (
    <SwitchedIcon
      className="w-10 h-10 max-sm:w-8 max-sm:h-8 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      onClick={() => window.open(link, "_blank")}
    />
  );
};

type TechnologyListProps = {
  stack: string[];
};

export default function TechnologyList({ stack }: TechnologyListProps) {
  const getTechnologyLink = (technology: string): string => {
    switch (technology) {
      case "WordPress":
        return "https://wordpress.org";
      case "PHP":
        return "https://www.php.net";
      case "Docker":
        return "https://www.docker.com";
      case "React":
        return "https://reactjs.org";
      case "AWS":
        return "https://aws.amazon.com";
      case "Node":
        return "https://nodejs.org";
      case "Figma":
        return "https://www.figma.com";
      case "TypeScript":
        return "https://www.typescriptlang.org";
      case "Storybook":
        return "https://storybook.js.org";
      case "GraphQL":
        return "https://graphql.org";
      case "Mqtt":
        return "https://mqtt.org";
      case "MongoDB":
        return "https://www.mongodb.com";
      case "Svelte":
        return "https://svelte.dev";
      case "PostgreSQL":
        return "https://www.postgresql.org";
      case "Prisma":
        return "https://www.prisma.io";
      case "GitHub":
        return "https://github.com";
      case "Vercel":
        return "https://vercel.com";
      default:
        return "#";
    }
  };

  return (
    <div className="flex gap-4">
      {stack.map((technology) => (
        <TechnologyIcon
          key={technology}
          name={technology}
          link={getTechnologyLink(technology)}
        />
      ))}
    </div>
  );
}
