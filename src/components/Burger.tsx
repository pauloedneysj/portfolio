"use client";

import { Locale } from "@/config/i18n-config";
import LanguageDropdown from "./LanguageDropdown";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { useTheme } from "next-themes";
import { getDictionaryUseClient } from "@/dictionaries/get-dictionary-use-client";

type BurgerProps = {
  lang: Locale;
};

export default function Burger({ lang }: BurgerProps) {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const dict = getDictionaryUseClient(lang);

  return (
    <div className="flex flex-col justify-center mt-16 ml-[30%] gap-6">
      <LanguageDropdown lang={lang} />
      {currentTheme === "dark" ? (
        <div className="flex items-center gap-1 cursor-pointer">
          <BsMoon
            size={16}
            className="cursor-pointer transition ease-in-out delay-150 hover:origin-center hover:-rotate-90 duration-300"
            onClick={() =>
              theme === "dark" ? setTheme("light") : setTheme("dark")
            }
            color="white"
          />
          <p className="text-md font-bold">
            {dict.navbar.burger.theme[currentTheme as "light" | "dark"]}
          </p>
        </div>
      ) : (
        <div className="flex items-center gap-1 cursor-pointer">
          <BsSun
            size={20}
            className="cursor-pointer transition ease-in-out delay-150 hover:origin-center hover:-rotate-90 duration-300"
            onClick={() =>
              theme === "dark" ? setTheme("light") : setTheme("dark")
            }
            color="white"
          />
          <p className="text-md font-bold text-white">
            {dict.navbar.burger.theme[currentTheme as "light" | "dark"]}
          </p>
        </div>
      )}
    </div>
  );
}
