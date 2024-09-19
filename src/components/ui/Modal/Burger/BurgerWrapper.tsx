"use client";

import { Locale } from "@/config/i18n-config";
import LanguageDropdown from "../../../layout/LanguageDropdown";

import ThemeToggleButton from "@/components/layout/ThemeToggleButton";

type BurgerProps = {
  lang: Locale;
};

export default function BurgerWrapper({ lang }: BurgerProps) {
  return (
    <div id="burger" className="flex flex-col h-full w-full items-center gap-4">
      <LanguageDropdown lang={lang} />
      <ThemeToggleButton lang={lang} />
    </div>
  );
}
