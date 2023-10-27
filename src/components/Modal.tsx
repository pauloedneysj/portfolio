import { isOpenAtom, modalTypeAtom } from "@/atoms/modal-atoms";
import { useAtom } from "jotai";
import { AiOutlineClose } from "react-icons/ai";
import About from "./About";
import Projects from "./Projects";
import { Locale } from "@/config/i18n-config";
import Burger from "./Burger";
import Experience from "./Experience";

type ModalProps = {
  lang: Locale;
};

export default function Modal({ lang }: ModalProps) {
  const [isOpen, setIsOpen] = useAtom(isOpenAtom);
  const [modalType, setModalType] = useAtom(modalTypeAtom);

  return (
    isOpen && (
      <main
        id="modal"
        className="flex items-center justify-end absolute w-full h-full rounded-lg"
      >
        <section className="bottom-0 h-full bg-zinc-900 animate-width p-8">
          <AiOutlineClose
            id="modal-close"
            className="absolute cursor-pointer transition ease-in-out delay-150 hover:origin-center hover:-rotate-180 duration-300"
            color="white"
            size={30}
            onClick={() => {
              setIsOpen(false);
              setModalType(null);
            }}
          />
          <article id="modal-article">
            {modalType == "about" && <About lang={lang} />}
            {modalType == "experience" && <Experience lang={lang} />}
            {modalType == "projects" && <Projects lang={lang} />}
            {modalType == "burger" && <Burger lang={lang} />}
          </article>
        </section>
      </main>
    )
  );
}
