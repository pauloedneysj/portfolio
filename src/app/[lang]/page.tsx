"use client";

import { Locale } from "../../config/i18n-config";
import { getDictionaryUseClient } from "@/dictionaries/get-dictionary-use-client";
import { isOpenAtom } from "@/atoms/modal-atoms";
import { useAtomValue } from "jotai";
import Image from "next/image";
import Picture from "@/img/photo.jpg";
import Modal from "@/components/Modal/Modal";
import DownloadButton from "@/components/DownloadButton";
import SocialMedia from "@/components/SocialMedia";

export default function HomePage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = getDictionaryUseClient(lang);
  const isOpen = useAtomValue(isOpenAtom);

  return (
    <main id="home" className="flex flex-col h-full overflow-hidden">
      <div
        id="home-container"
        className={`flex flex-row  w-full h-full justify-center items-center ${
          isOpen ? "animate-opacity-inverse" : "animate-opacity"
        }`}
      >
        <div id="presentation" className="flex flex-col w-8/12 h-full">
          <div id="presentation-div" className="mt-52 space-y-2">
            <p
              className={`max-sm:text-4xl max-[950px]:text-4xl text-6xl max-sm:-ml-2 ml-12 font-bold`}
            >
              {dict.home.name}
            </p>
            <p className="max-sm:text-xl max-[950px]:text-2xl text-3xl max-sm:-ml-2 ml-12">
              {dict.home.office}
            </p>
            <p className="max-sm:text-xs max-[950px]:text-sm text-md max-sm:-ml-2 ml-12 dark:text-zinc-500 text-secondary max-sm:w-10/12 w-6/12">
              {dict.home.description}
            </p>
          </div>

          <div className="max-sm:absolute max-sm:flex max-sm:gap-4 max-sm:bottom-0 max-sm:self-center">
            <SocialMedia />
            <DownloadButton title={dict.home.download} />
          </div>
        </div>

        <div
          id="picture"
          className="max-sm:hidden flex w-[1px] h-full justify-center items-center"
        >
          <Image
            src={Picture}
            alt="picture"
            className="absolute top-[35%] max-[950px]:w-40 max-[950px]:h-40 md:w-60 md:h-60 rounded-full object-cover hover:shadow-2xl hover:grayscale-0 grayscale transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            placeholder="blur"
            blurDataURL={Picture.blurDataURL}
            priority={true}
          />
        </div>

        <div
          className={`max-sm:hidden w-5/12 h-full bg-secondary dark:bg-secondary ${
            isOpen == false && "animate-width-inverse"
          }`}
        ></div>
      </div>

      <Modal lang={lang} />
    </main>
  );
}
