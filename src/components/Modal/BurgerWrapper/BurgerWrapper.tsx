"use client";

import { Locale } from "@/config/i18n-config";
import LanguageDropdown from "../../LanguageDropdown";
import { LuFlashlight } from "react-icons/lu";
import { LuFlashlightOff } from "react-icons/lu";
import { useTheme } from "next-themes";
import { getDictionaryUseClient } from "@/dictionaries/get-dictionary-use-client";

type BurgerProps = {
  lang: Locale;
};

export default function BurgerWrapper({ lang }: BurgerProps) {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const dict = getDictionaryUseClient(lang);

  return (
    <div className="flex flex-col justify-center ml-[36%] gap-6">
      <LanguageDropdown lang={lang} />
      {currentTheme === "dark" ? (
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          <LuFlashlightOff
            size={16}
            className="cursor-pointer transition ease-in-out delay-150 hover:origin-center hover:-rotate-90 duration-300"
            color="white"
          />
          <p className="text-md font-bold">
            {dict.navbar.burger.theme[currentTheme as "light" | "dark"]}
          </p>
        </div>
      ) : (
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          <LuFlashlight
            size={16}
            className="cursor-pointer transition ease-in-out delay-150 hover:origin-center hover:-rotate-90 duration-300"
            color="white"
          />
          <p className="text-md font-bold text-primary">
            {dict.navbar.burger.theme[currentTheme as "light" | "dark"]}
          </p>
        </div>
      )}
    </div>
  );
}
