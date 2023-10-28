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
        <div className="flex flex-row items-center justify-center gap-1">
          <Image
            src={flag[lang]}
            alt="dropdown-language-flag"
            className="sm:hidden w-5 h-5"
            placeholder="blur"
            blurDataURL={flag[lang].blurDataURL}
            priority={true}
          />
          <span className="text-md font-bold max-sm:text-primary dark:max-sm:text-typography inline-flex gap-1">
            {dict.navbar.languages[lang]}
            <IoIosArrowDown className="mt-1 max-sm:text-primary dark:max-sm:text-typography" />
          </span>
        </div>
      </div>
      {languages.length > 0 && (
        <ul className="absolute w-max py-1 mt-8 max-sm:mt-28 space-y-1 z-20 bg-primary border border-gray-200 rounded-md shadow-lg animate-opacity-dropdown">
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
                placeholder="blur"
                blurDataURL={flag[language].blurDataURL}
                priority={true}
              />
              <Link
                href={`/${language}`}
                className={
                  language === lang
                    ? "text-md font-bold cursor-default text-disabled"
                    : "text-md font-bold"
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
