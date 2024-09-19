import { FaRegCalendarAlt } from "react-icons/fa";

export default function ExperienceDate({ date }: { date: string }) {
  return (
    <time className="sm:absolute gap-1 -left-10 translate-y-0.5 inline-flex items-center text-xs font-semibold w-max h-6 mb-3 sm:mb-0 text-typography rounded-full">
      <FaRegCalendarAlt className="w-4 h-4" />
      {date}
    </time>
  );
}
