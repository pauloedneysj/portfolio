"use client";

import { Locale } from "@/config/i18n-config";
import { getDictionaryUseClient } from "@/dictionaries/get-dictionary-use-client";
import { useAtom, useSetAtom } from "jotai";
import { isOpenAtom, modalTypeAtom } from "@/atoms/modal-atoms";
import { GiHamburgerMenu } from "react-icons/gi";
import LanguageDropdown from "./LanguageDropdown";
import ThemeSwitcher from "./ThemeSwitcher";
import { screenCoordsAtom } from "@/atoms/cursor-effect-atoms";

type NavbarProps = {
  lang: Locale;
  aboutButton?: () => void;
  experienceButton?: () => void;
  projectsButton?: () => void;
};

export default function Navbar({ lang }: NavbarProps) {
  const dict = getDictionaryUseClient(lang);

  const [isOpen, setIsOpen] = useAtom(isOpenAtom);
  const [modalType, setModalType] = useAtom(modalTypeAtom);
  const setScreenCoords = useSetAtom(screenCoordsAtom);

  const handleModal = (currentModalType: string) => {
    if (!isOpen || currentModalType !== modalType) setIsOpen(true);
    else setIsOpen(false);

    if (currentModalType === modalType) setModalType(null);
    else setModalType(currentModalType);
  };

  const handleMouseMove = (event: { clientX: number; clientY: number }) => {
    const x = event.clientX - 320;
    const y = event.clientY - 320;
    setScreenCoords({ x, y });
  };

  return (
    <nav
      id="navbar"
      className="flex items-center max-sm:justify-center justify-between w-full md:h-16 p-4"
      onMouseMove={handleMouseMove}
    >
      <div className="flex items-center space-x-4">
        <GiHamburgerMenu
          onClick={() => handleModal("burger")}
          className="sm:hidden absolute left-[5%] cursor-pointer transition ease-in-out delay-150 hover:origin-center hover:-translate-y-1 duration-300"
        />
        <p
          className={`text-md font-bold cursor-pointer transition ease-in-out delay-150 hover:origin-center hover:-translate-y-1 duration-300 ${
            modalType == "about" ? " -translate-y-1" : ""
          }`}
          onClick={() => handleModal("about")}
        >
          {dict.navbar.about}
        </p>
        <p
          className={`text-md font-bold cursor-pointer transition ease-in-out delay-150 hover:origin-center hover:-translate-y-1 duration-300 ${
            modalType == "experience" ? " -translate-y-1" : ""
          }`}
          onClick={() => handleModal("experience")}
        >
          {dict.navbar.experience}
        </p>
        <p
          className={`text-md font-bold cursor-pointer transition ease-in-out delay-150 hover:origin-center hover:-translate-y-1 duration-300 ${
            modalType == "projects" ? " -translate-y-1" : ""
          }`}
          onClick={() => handleModal("projects")}
        >
          {dict.navbar.projects}
        </p>
      </div>
      <div className="max-sm:hidden flex flex-row items-center space-x-4">
        <LanguageDropdown lang={lang} />
        <ThemeSwitcher lang={lang} />
      </div>
    </nav>
  );
}
