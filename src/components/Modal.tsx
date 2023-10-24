import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  aboutContent?: React.ReactNode;
  experienceContent?: React.ReactNode;
  projectsContent?: React.ReactNode;
  onClick: () => void;
}

export default function Modal({
  aboutContent,
  experienceContent,
  projectsContent,
  onClick,
}: ModalProps) {
  return (
    <main
      id="modal"
      className="flex items-center justify-end absolute w-full h-full md:pt-16 rounded-lg"
    >
      <section className="bottom-0 h-full bg-zinc-900 animate-width p-8">
        <AiOutlineClose
          id="modal-close"
          className="absolute cursor-pointer"
          color="white"
          size={30}
          onClick={onClick}
        />
        <article id="modal-article">
          {aboutContent}
          {experienceContent}
          {projectsContent}
        </article>
      </section>
    </main>
  );
}
