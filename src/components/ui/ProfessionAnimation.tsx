import { Locale } from "@/config/i18n-config";
import { getDictionaryUseClient } from "@/dictionaries/get-dictionary-use-client";
import { TypeAnimation } from "react-type-animation";

type ProfessionAnimationProps = {
  lang: Locale;
};

export default function ProfessionAnimation({
  lang,
}: ProfessionAnimationProps) {
  const dict = getDictionaryUseClient(lang);
  const sm = window.matchMedia("(max-width: 640px)").matches;

  return (
    <div className="text-typography">
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
        style={{
          display: "inline-block",
          fontSize: sm ? "1.5rem" : "2.25rem",
          lineHeight: sm ? "2rem" : "2.5rem",
        }}
        repeat={Infinity}
      />
    </div>
  );
}
