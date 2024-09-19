import { Locale } from "@/config/i18n-config";
import { useEffect, useState } from "react";
import { getDictionaryUseClient } from "@/dictionaries/get-dictionary-use-client";
import ScrollHint from "@/components/layout/ScrollHint";
import ExperienceItem from "./ExperienceItem";

type ExperienceListProps = {
  lang: Locale;
};

export default function ExperienceList({ lang }: ExperienceListProps) {
  const { list: experiences } = getDictionaryUseClient(lang).modal.experience;

  const [onMount, setOnMount] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setOnMount(false), 5000);
    return () => clearTimeout(timeoutId); // Cleanup timeout on unmount
  }, []);

  return (
    <div id="experience-list" className="flex flex-col">
      <ScrollHint isVisible={onMount} />
      {experiences.map((experience, index) => (
        <ExperienceItem key={index} experience={experience} />
      ))}
    </div>
  );
}
