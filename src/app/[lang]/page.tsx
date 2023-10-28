"use client";

import { Locale } from "../../config/i18n-config";
import { getDictionaryUseClient } from "@/dictionaries/get-dictionary-use-client";
import { isOpenAtom } from "@/atoms/modal-atoms";
import { useAtomValue, useSetAtom } from "jotai";
import Image from "next/image";
import myPhoto from "@/img/photo.jpg";
import Modal from "@/components/Modal/Modal";
import DownloadButton from "@/components/DownloadButton";
import SocialMedia from "@/components/SocialMedia";
import { screenCoordsAtom } from "@/atoms/cursor-effect-atoms";
import { TypeAnimation } from "react-type-animation";

export default function HomePage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = getDictionaryUseClient(lang);
  const isOpen = useAtomValue(isOpenAtom);
  const setScreenCoords = useSetAtom(screenCoordsAtom);

  const handleMouseMove = (event: { clientX: number; clientY: number }) => {
    const x = event.clientX - 320;
    const y = event.clientY - 320;
    setScreenCoords({ x, y });
  };

  return (
    <main
      id="home"
      className="flex flex-col h-full overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div
        id="home-container"
        className={`flex flex-row  w-full h-full justify-center items-center ${
          isOpen ? "animate-opacity-inverse" : "animate-opacity"
        }`}
      >
        <div
          id="presentation"
          className="flex flex-col justify-center w-8/12 h-full"
        >
          <div
            id="presentation-div"
            className="flex flex-col max-sm:mb-36 mb-32"
          >
            <div className="w-[70%] max-[770px]:w-[65%] max-sm:w-full max-sm:text-center max-sm:space-y-1 space-y-2 max-sm:ml-0 ml-12">
              <p
                className={`max-sm:text-4xl max-[950px]:text-5xl text-6xl font-bold`}
              >
                {dict.home.name}
              </p>
              <p className="max-sm:text-sm max-[950px]:text-md text-lg space-y-4 tracking-wide">
                <TypeAnimation
                  sequence={[
                    dict.home.office.backend,
                    2000,
                    dict.home.office.frontend,
                    2000,
                    dict.home.office.web,
                    2000,
                    dict.home.office.softwareEngineer,
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "2em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </p>
              <p className="max-sm:text-xs max-[950px]:text-sm text-md dark:text-zinc-500 text-zinc-800">
                {dict.home.description}
              </p>
            </div>
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
            src={myPhoto}
            alt="My photo"
            className="absolute max-[950px]:w-40 max-[950px]:h-40 w-52 h-52 mb-36 rounded-full object-cover hover:shadow-2xl hover:grayscale-0 grayscale transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            placeholder="blur"
            blurDataURL={myPhoto.blurDataURL}
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
