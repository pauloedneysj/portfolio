import ExperienceDate from "./ExperienceDate";
import ExperienceDescription from "./ExperienceDescription";

export default function ExperienceItem({ experience }: { experience: any }) {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      <div className="font-bold text-2xl text-typography dark:text-typography mb-1 sm:mb-0">
        {experience.title}
      </div>
      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-[0.25px] before:bg-typography sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-secondary after:border-4 after:box-content after:border-typography primary after:dark:border-typography after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        <ExperienceDate date={experience.date} />
        <div className="text-xl text-typography dark:text-typography">
          {experience.company}
        </div>
      </div>
      <ExperienceDescription description={experience.description} />
    </div>
  );
}
