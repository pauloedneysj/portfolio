"use client";

import { Locale } from "@/config/i18n-config";
import LanguageDropdown from "./LanguageDropdown";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuFlashlight } from "react-icons/lu";
import { LuFlashlightOff } from "react-icons/lu";
import { useTheme } from "next-themes";
import { useAtom } from "jotai";
import { isOpenAtom, modalTypeAtom } from "@/atoms/modal-atoms";
import { getDictionaryUseClient } from "@/dictionaries/get-dictionary-use-client";

type NavbarProps = {
  lang: Locale;
  aboutButton?: () => void;
  experienceButton?: () => void;
  projectsButton?: () => void;
};

export default function Navbar({ lang }: NavbarProps) {
  const dict = getDictionaryUseClient(lang);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const [isOpen, setIsOpen] = useAtom(isOpenAtom);
  const [modalType, setModalType] = useAtom(modalTypeAtom);

  const handleModal = (currentModalType: string) => {
    if (!isOpen || currentModalType !== modalType) setIsOpen(true);
    else setIsOpen(false);

    if (currentModalType === modalType) setModalType(null);
    else setModalType(currentModalType);
  };

  return (
    <nav
      id="navbar"
      className="flex items-center max-sm:justify-center justify-between w-full md:h-16 p-4"
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
        {currentTheme === "dark" ? (
          <>
            <LuFlashlightOff
              size={18}
              className="cursor-pointer -rotate-180 transition ease-in-out delay-150 hover:origin-center hover:-translate-y-1 duration-300"
              onClick={() =>
                theme === "dark" ? setTheme("light") : setTheme("dark")
              }
            />
          </>
        ) : (
          <>
            <LuFlashlight
              size={18}
              className="cursor-pointer -rotate-180 transition ease-in-out delay-150 hover:origin-center hover:-translate-y-1 duration-300"
              onClick={() =>
                theme === "dark" ? setTheme("light") : setTheme("dark")
              }
            />
          </>
        )}
      </div>
    </nav>
  );
}
