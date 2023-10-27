"use client";

import { Locale } from "@/config/i18n-config";
import { getDictionaryUseClient } from "@/dictionaries/get-dictionary-use-client";

type ExperienceProps = {
  lang: Locale;
};

export default function Experience({ lang }: ExperienceProps) {
  const dict = getDictionaryUseClient(lang);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-white mb-36">
        {dict.navbar.experience}
      </h1>
    </div>
  );
}
