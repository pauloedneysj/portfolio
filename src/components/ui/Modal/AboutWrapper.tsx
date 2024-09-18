"use client";

import { Locale } from "@/config/i18n-config";
import { getDictionaryUseClient } from "@/dictionaries/get-dictionary-use-client";

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
          <div className="flex flex-col gap-4">
            {aboutList.map((text, index) => (
              <p
                key={text}
                className={`text-lg text-typography ${
                  index === 0 && "first-letter:text-3xl"
                }`}
              >
                {text}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col flex-1 w-full gap-8">
          <div className="flex flex-wrap gap-3">
            {skillsList.map((skill) => (
              <div
                key={skill}
                className="w-max h-max px-4 py-3 text-xs text-typography opacity-60 bg-[rgba(153,153,153,.2)] rounded-md cursor-default shadow-lg transition hover:opacity-100 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
