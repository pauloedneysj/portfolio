"use client";

import { VscColorMode } from "react-icons/vsc";
import { useTheme } from "next-themes";
import { Locale } from "@/config/i18n-config";
import { getDictionaryUseClient } from "@/dictionaries/get-dictionary-use-client";

type ThemeToggleButtonProps = {
  lang: Locale;
};

export default function ThemeToggleButton({ lang }: ThemeToggleButtonProps) {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const dict = getDictionaryUseClient(lang);

  return (
    <>
      {currentTheme === "dark" ? (
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          <VscColorMode className="cursor-pointer text-typography max-sm:w-6 max-sm:h-6" />
          <p className="sm:hidden text-2xl font-bold">
            {dict.navbar.burger.theme[currentTheme as "light" | "dark"]}
          </p>
        </div>
      ) : (
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          <VscColorMode className="cursor-pointer text-typography max-sm:w-6 max-sm:h-6" />
          <p className="sm:hidden text-2xl font-bold text-typography">
            {dict.navbar.burger.theme[currentTheme as "light" | "dark"]}
          </p>
        </div>
      )}
    </>
  );
}
