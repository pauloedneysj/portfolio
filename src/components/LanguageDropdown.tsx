"use client";

import { Locale, i18n } from "@/config/i18n-config";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import enUSFlag from "@/img/flags/en-US.png";
import ptBRFlag from "@/img/flags/pt-BR.png";
import { getDictionaryUseClient } from "@/dictionaries/get-dictionary-use-client";
import { useState } from "react";
import Link from "next/link";

const flag = {
  "en-US": enUSFlag,
  "pt-BR": ptBRFlag,
};

export default function LanguageDropdown({ lang }: { lang: Locale }) {
  const dict = getDictionaryUseClient(lang);

  const [languages, setLanguages] = useState<Locale[]>([]);

  const onSelectedStyle = languages.length > 0 ? " -translate-y-1" : "";

  const onSelectedStyle2 =
    languages.length > 0
      ? "px-3 py-1 bg-gray-200 w-full h-full flex items-center space-x-2"
      : "";

  const handleSelectedLanguages = () => {
    if (languages.length === 0) {
      setLanguages((prev) => [...prev, ...(i18n.locales as Locale[])]);
    } else {
      setLanguages([]);
    }
  };

  return (
    <div className="relative max-sm:flex-col inline-flex justify-center">
      <div
        className={
          "flex items-center space-x-1 cursor-pointer transition ease-in-out delay-150 hover:origin-center hover:-translate-y-1 duration-300" +
          onSelectedStyle
        }
        onClick={handleSelectedLanguages}
      >
        <Image
          src={flag[lang as Locale]}
          alt="selected-language-flag"
          className="w-5 h-5"
        />
        <div className="flex flex-row items-center justify-center">
          <span className="text-md font-bold dark:text-white">
            {dict.navbar.languages[lang]}
          </span>
          <IoIosArrowDown className="mt-1 dark:text-white" />
        </div>
      </div>
      {languages.length > 0 && (
        <ul className="absolute w-max py-1 mt-8 space-y-1 z-20 bg-white border border-gray-200 rounded-md shadow-lg animate-opacity-dropdown">
          {languages.map((language, index) => (
            <li
              key={index}
              className={
                language === lang
                  ? onSelectedStyle2
                  : "px-3 py-1 cursor-pointer hover:bg-gray-200 w-full h-full flex items-center space-x-2"
              }
            >
              <Image
                src={flag[language]}
                alt="dropdown-language-flag"
                className="w-5 h-5"
              />
              <Link
                href={`/${language}`}
                className={
                  language === lang
                    ? "text-md font-bold cursor-default text-gray-600"
                    : "text-md font-bold dark:text-zinc-900"
                }
              >
                {dict.navbar.languages[language]}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
