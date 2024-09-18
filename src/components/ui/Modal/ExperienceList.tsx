import { Locale } from "@/config/i18n-config";
import { useEffect, useState } from "react";
import { FaArrowTurnDown } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { getDictionaryUseClient } from "@/dictionaries/get-dictionary-use-client";

type ExperienceListProps = {
  lang: Locale;
};

export default function ExperienceList({ lang }: ExperienceListProps) {
  const { list: experiences } = getDictionaryUseClient(lang).modal.experience;

  const [onMount, setOnMount] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOnMount(false);
    }, 5000);
  });

  return (
    <div id="experience-list" className="flex flex-col">
      <div
        className={`fixed flex-col gap-6 items-center max-[1080px]:right-8 right-20 bottom-8 max-sm:hidden scroll-hint-opacity ${
          onMount ? "" : "hidden"
        }`}
      >
        <FaArrowTurnDown className="animate-bounce w-12 h-12 max-[1080px]:w-8 max-[1080px]:h-8 text-typography" />
      </div>
      {experiences.map((experience, index) => (
        <div key={index} className="relative pl-8 sm:pl-32 py-6 group">
          <div className="font-bold text-2xl text-typography dark:text-typography mb-1 sm:mb-0">
            {experience.title}
          </div>
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-[0.25px] before:bg-typography sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-secondary after:border-4 after:box-content after:border-typography primary after:dark:border-typography after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute gap-1 -left-10 translate-y-0.5 inline-flex items-center text-xs font-semibold w-max h-6 mb-3 sm:mb-0 text-typography rounded-full">
              <FaRegCalendarAlt className="w-4 h-4" />
              {experience.date}
            </time>
            <div className="text-xl text-typography dark:text-typography">
              {experience.company}
            </div>
          </div>
          {experience.description.map((activity, index) => (
            <div
              key={index}
              className="text-typography font-thin opacity-90 dark:opacity-60"
            >
              {activity}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
