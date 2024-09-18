"use client";

import { screenCoordsAtom } from "@/atoms/cursor-effect-atoms";
import { isOpenAtom } from "@/atoms/modal-atoms";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal/Modal";
import ProfessionAnimation from "@/components/ui/ProfessionAnimation";
import ProfilePicture from "@/components/layout/ProfilePicture";
import SocialMedia from "@/components/layout/SocialMedia";
import { getDictionaryUseClient } from "@/dictionaries/get-dictionary-use-client";
import links from "@/utils/variables/links";
import { useAtomValue, useSetAtom } from "jotai";
import { Locale } from "../../config/i18n-config";

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

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = links.resume;
    link.click();
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
                className={`max-sm:text-4xl max-[950px]:text-5xl text-6xl font-bold text-typography`}
              >
                {dict.home.name}
              </p>
              <ProfessionAnimation lang={lang} />
              <p className="max-sm:text-xs max-[950px]:text-sm text-md text-typography dark:text-disabled">
                {dict.home.description}
              </p>
            </div>
          </div>

          <div className="max-sm:absolute max-sm:flex max-sm:gap-4 max-sm:bottom-0 max-sm:self-center">
            <div className="max-sm:relative absolute max-sm:-ml-2 ml-12 max-sm:bottom-12 bottom-12">
              <SocialMedia />
            </div>
            <div className="max-sm:relative sm:absolute bottom-12 sm:right-2/4 ">
              <Button title={dict.home.download} onClick={handleDownload} />
            </div>
          </div>
        </div>

        <div
          id="profile-picture"
          className="max-sm:hidden flex w-[0.1px] h-full justify-center items-center"
        >
          <div className="absolute mb-36">
            <ProfilePicture />
          </div>
        </div>

        <div
          className={`max-sm:hidden w-5/12 h-full bg-secondary dark:bg-secondary shadow-md dark:shadow-2xl ${
            isOpen == false && "animate-width-inverse"
          }`}
        />
      </div>

      <Modal lang={lang} />
    </main>
  );
}
