"use client";

import { Locale } from "@/config/i18n-config";
import LanguageDropdown from "./LanguageDropdown";
import { BsSun } from "react-icons/bs";

type NavbarProps = {
  lang: Locale;
  aboutButton?: () => void;
  experienceButton?: () => void;
  projectsButton?: () => void;
};

export default function Navbar({
  lang,
  aboutButton,
  experienceButton,
  projectsButton,
}: NavbarProps) {
  return (
    <nav
      id="navbar"
      className="flex items-center justify-between w-full md:h-16 p-4 z-10"
    >
      <div className="flex items-center space-x-4">
        <p className="text-md font-bold cursor-pointer" onClick={aboutButton}>
          Sobre
        </p>
        <p className="text-md font-bold" onClick={experienceButton}>
          Experiência
        </p>
        <p className="text-md font-bold" onClick={projectsButton}>
          Projetos
        </p>
      </div>
      <div className="flex flex-row items-center space-x-4">
        <LanguageDropdown lang={lang} />
        <BsSun size={20} />
      </div>
    </nav>
  );
}
