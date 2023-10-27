"use client";

import { Locale } from "../../config/i18n-config";
import { getDictionaryUseClient } from "@/dictionaries/get-dictionary-use-client";
import { isOpenAtom } from "@/atoms/modal-atoms";
import { useAtomValue } from "jotai";
import Image from "next/image";
import Picture from "@/img/photo.jpg";
import Modal from "@/components/Modal";
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
    <main
      id="home"
      className="flex flex-col h-full overflow-hidden bg-[#fafafa] dark:bg-zinc-900"
    >
      <section
        id="container"
        className={`flex flex-row  w-full h-full justify-center items-center ${
          isOpen ? "animate-opacity-inverse" : "animate-opacity"
        }`}
      >
        <section id="presentation" className="flex flex-col w-8/12 h-full">
          <header id="presentation-header" className="mt-52 mb-4 space-y-1">
            <p className="max-sm:text-4xl max-[950px]:text-4xl text-6xl max-sm:-ml-2 ml-12 font-bold">
              {dict.home.name}
            </p>
            <p className="max-sm:text-xl max-[950px]:text-2xl text-3xl max-sm:-ml-2 ml-12 hover:animate-pulse">
              {dict.home.office}
            </p>
          </header>

          <article id="presentation-article">
            <p className="max-sm:text-xs max-[950px]:text-sm text-md max-sm:-ml-2 ml-12 dark:text-zinc-500 text-zinc-900 hover:animate-pulse max-sm:w-10/12 w-6/12">
              {
                "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
              }
            </p>
          </article>

          <div className="max-sm:absolute max-sm:flex max-sm:gap-4 max-sm:bottom-0 max-sm:self-center">
            <SocialMedia />
            <DownloadButton title={dict.home.download} />
          </div>
        </section>

        <section
          id="picture"
          className="max-sm:hidden flex w-[1px] h-full justify-center items-center"
        >
          <Image
            src={Picture}
            alt="My picture"
            className="absolute max-[950px]:w-40 max-[950px]:h-40 md:w-60 md:h-60 rounded-full object-cover hover:shadow-2xl hover:grayscale-0 grayscale transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            priority
          />
        </section>

        <div
          className={`max-sm:hidden w-5/12 h-full bg-zinc-900 dark:bg-zinc-200 ${
            isOpen == false && "animate-width-inverse"
          }`}
        ></div>
      </section>

      <Modal lang={lang} />
    </main>
  );
}
