"use client";

import { LuFlashlight } from "react-icons/lu";
import { LuFlashlightOff } from "react-icons/lu";
import { useTheme } from "next-themes";
import { Locale } from "@/config/i18n-config";
import { getDictionaryUseClient } from "@/dictionaries/get-dictionary-use-client";

type ThemeSwitcherProps = {
  lang: Locale;
};

export default function ThemeSwitcher({ lang }: ThemeSwitcherProps) {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const dict = getDictionaryUseClient(lang);

  return (
    <>
      {currentTheme === "dark" ? (
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          <LuFlashlightOff
            size={16}
            className="cursor-pointer transition ease-in-out delay-150 hover:origin-center hover:-translate-y-1 duration-300"
          />
          <p className="sm:hidden text-md font-bold">
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
            className="cursor-pointer max-sm:text-primary text-typography transition ease-in-out delay-150 hover:origin-center hover:-translate-y-1 duration-300"
          />
          <p className="sm:hidden text-md font-bold max-sm:text-primary">
            {dict.navbar.burger.theme[currentTheme as "light" | "dark"]}
          </p>
        </div>
      )}
    </>
  );
}
