"use client";

import { Locale } from "@/config/i18n-config";
import { getDictionaryUseClient } from "@/dictionaries/get-dictionary-use-client";
import ExperienceList from "./ExperienceList";

type ExperienceProps = {
  lang: Locale;
};

export default function ExperienceWrapper({ lang }: ExperienceProps) {
  const { title: experienceTitle } =
    getDictionaryUseClient(lang).modal.experience;

  return (
    <div id="experience" className="flex flex-col items-center gap-4 h-full">
      <h1 className="max-sm:text-3xl text-4xl font-bold text-typography">
        {experienceTitle}
      </h1>
      <div className="flex justify-center w-screen overflow-y-auto animate-on-mount mb-10">
        <ExperienceList lang={lang} />
      </div>
    </div>
  );
}
