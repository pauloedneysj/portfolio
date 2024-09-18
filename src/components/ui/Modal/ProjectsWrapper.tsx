import { Locale } from "@/config/i18n-config";
import { getDictionaryUseClient } from "@/dictionaries/get-dictionary-use-client";
import ProjectList from "./ProjectList";

type ProjectsProps = {
  lang: Locale;
};

export default function ProjectsWrapper({ lang }: ProjectsProps) {
  const { title: projectsTitle } = getDictionaryUseClient(lang).modal.projects;

  return (
    <div
      id="projects"
      className="flex flex-col items-center h-full max-[900px]:gap-7 gap-4"
    >
      <h1 className="max-sm:text-3xl text-4xl font-bold text-typography">
        {projectsTitle}
      </h1>
      <div className="flex justify-center w-screen h-5/6 overflow-y-auto animate-on-mount">
        <ProjectList lang={lang} />
      </div>
    </div>
  );
}
