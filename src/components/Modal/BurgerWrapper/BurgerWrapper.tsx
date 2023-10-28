"use client";

import { Locale } from "@/config/i18n-config";
import LanguageDropdown from "../../LanguageDropdown";

import ThemeSwitcher from "@/components/ThemeSwitcher";

type BurgerProps = {
  lang: Locale;
};

export default function BurgerWrapper({ lang }: BurgerProps) {
  return (
    <div className="flex flex-col h-full w-full items-center gap-4">
      <LanguageDropdown lang={lang} />
      <ThemeSwitcher lang={lang} />
    </div>
  );
}
