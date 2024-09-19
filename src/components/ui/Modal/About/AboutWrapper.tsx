"use client";

import { Locale } from "@/config/i18n-config";
import { getDictionaryUseClient } from "@/dictionaries/get-dictionary-use-client";
import AboutList from "./AboutList";
import SkillsList from "./SkillsList";

type AboutProps = {
  lang: Locale;
};

export default function AboutWrapper({ lang }: AboutProps) {
  const {
    title: aboutTitle,
    aboutList,
    skillsList,
  } = getDictionaryUseClient(lang).modal.about;

  return (
    <div
      id="about"
      className="flex flex-col items-center h-full gap-12 max-[900px]:gap-6"
    >
      <h1 className="max-sm:text-3xl text-4xl font-bold text-typography">
        {aboutTitle}
      </h1>

      <div className="flex w-screen h-5/6 px-20 gap-8 animate-on-mount max-[900px]:flex-col max-[900px]:overflow-y-auto max-[900px]:px-10">
        <div className="flex flex-col flex-1 w-full gap-8">
          <AboutList aboutList={aboutList} />
        </div>

        <div className="flex flex-col flex-1 w-full gap-8">
          <SkillsList skillsList={skillsList} />
        </div>
      </div>
    </div>
  );
}
