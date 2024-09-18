import { isOpenAtom, modalTypeAtom } from "@/atoms/modal-atoms";
import { useAtom } from "jotai";
import { Locale } from "@/config/i18n-config";
import { AiOutlineClose } from "react-icons/ai";
import BurgerWrapper from "./BurgerWrapper";
import AboutWrapper from "./AboutWrapper";
import ExperienceWrapper from "./ExperienceWrapper";
import ProjectsWrapper from "./ProjectsWrapper";

type ModalProps = {
  lang: Locale;
};

export default function Modal({ lang }: ModalProps) {
  const [isOpen, setIsOpen] = useAtom(isOpenAtom);
  const [modalType, setModalType] = useAtom(modalTypeAtom);

  return (
    isOpen && (
      <div
        id="modal-container"
        className="flex justify-end absolute w-full h-full"
      >
        <div
          id="modal-wrapper"
          className="bottom-0 h-full bg-secondary dark:bg-secondary animate-width p-8"
        >
          <AiOutlineClose
            id="modal-close"
            className="absolute cursor-pointer transition ease-in-out delay-150 hover:origin-center hover:-rotate-180 duration-300 text-typography"
            size={30}
            onClick={() => {
              setIsOpen(false);
              setModalType(null);
            }}
          />
          {modalType == "burger" && <BurgerWrapper lang={lang} />}
          {modalType == "about" && <AboutWrapper lang={lang} />}
          {modalType == "experience" && <ExperienceWrapper lang={lang} />}
          {modalType == "projects" && <ProjectsWrapper lang={lang} />}
        </div>
      </div>
    )
  );
}
