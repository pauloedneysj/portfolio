"use client";

import { Locale, i18n } from "@/config/i18n-config";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import usFlag from "@/img/flags/us.png";
import brFlag from "@/img/flags/br.png";
import { getDictionaryUseClient } from "@/dictionaries/get-dictionary-use-client";
import { useState } from "react";
import Link from "next/link";

const flag = {
  "en-US": usFlag,
  "pt-BR": brFlag,
};

export default function LanguageDropdown({ lang }: { lang: Locale }) {
  const dict = getDictionaryUseClient(lang);

  const [languages, setLanguages] = useState<Locale[]>([]);

  const onSelectedStyle =
    languages.length > 0
      ? "text-md font-bold animate-pulse"
      : "text-md font-bold";

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
    <div className="relative inline-flex justify-center">
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={handleSelectedLanguages}
      >
        {/* <Image
          src={flag[lang as Locale]}
          alt="selected-language-flag"
          className="w-5 h-5"
        /> */}
        <span className={onSelectedStyle}>{dict.navbar.languages[lang]}</span>
        <IoIosArrowDown />
      </div>
      {languages.length > 0 && (
        <ul className="absolute w-max py-1 mt-8 space-y-1 z-20 bg-white border border-gray-200 rounded-md shadow-lg animate-opacity">
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
