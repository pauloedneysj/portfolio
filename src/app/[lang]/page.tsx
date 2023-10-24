"use client";

import { Locale } from "../../config/i18n-config";
import { getDictionaryUseClient } from "@/dictionaries/get-dictionary-use-client";
import { useState } from "react";
import Image from "next/image";
import Picture from "@/img/photo.jpg";
import Navbar from "@/components/Navbar";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import Modal from "@/components/Modal";
import DownloadButton from "@/components/DownloadButton";
import CursorEffect from "@/components/CursorEffect";

const CV_LINK =
  "https://drive.google.com/u/0/uc?id=1XcepOiQ_EsIGA78InXy3KgD18ych98f3&export=download";

export default function HomePage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = getDictionaryUseClient(lang);

  const [isOpenModal, setIsOpenModal] = useState<boolean | null>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: { clientX: number; clientY: number }) => {
    const x = event.clientX - 182;
    const y = event.clientY - 182;
    setCoords({ x, y });
  };

  const handleModal = () => {
    if (!isOpenModal) setIsOpenModal(true);
    else setIsOpenModal(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV_LINK;
    link.click();
  };

  return (
    <main
      id="home"
      className="relative flex flex-col h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <Navbar
        lang={lang}
        aboutButton={handleModal}
        experienceButton={handleModal}
        projectsButton={handleModal}
      />

      <section
        id="container"
        className={`flex flex-row  w-full h-full justify-center items-center ${
          isOpenModal ? "animate-opacity-inverse" : "animate-opacity"
        }`}
      >
        <section
          id="presentation"
          className="flex flex-col justify-center w-8/12 h-full"
        >
          <header id="presentation-header" className="mb-4 space-y-1">
            <p className="text-6xl ml-12 font-bold">{"Paulo Edney"}</p>
            <p className="text-3xl ml-12 hover:animate-pulse">
              {"Software Engineer at LaCETI"}
            </p>
          </header>

          <article id="presentation-article">
            <p className="text-md ml-12 text-zinc-900 hover:animate-pulse w-6/12">
              {
                "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
              }
            </p>
          </article>

          <footer
            id="social"
            className="absolute flex flex-row items-center gap-8 ml-12 bottom-12"
          >
            <AiFillGithub
              size={30}
              className="hover:animate-pulse transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
            />
            <AiFillLinkedin
              size={32}
              className="hover:animate-pulse transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
            />
            <AiOutlineInstagram
              size={32}
              className="hover:animate-pulse transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
            />
          </footer>
        </section>

        <section
          id="picture"
          className="flex w-[1px] h-full bg-zinc-900 justify-center items-center"
        >
          <Image
            src={Picture}
            alt="My picture"
            className="absolute md:w-60 md:h-60 rounded-full object-cover hover:shadow-2xl grayscale transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            priority
          />
        </section>

        <div
          className={`w-5/12 h-full bg-zinc-900 ${
            isOpenModal == false && "animate-width-inverse"
          }`}
        ></div>

        <section id="download" className="absolute bottom-12">
          <DownloadButton title={dict.home.download} onClick={handleDownload} />
        </section>
      </section>

      {isOpenModal && <Modal onClick={handleModal} />}

      <CursorEffect coords={coords} />
    </main>
  );
}
