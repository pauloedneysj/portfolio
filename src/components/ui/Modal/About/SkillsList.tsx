export default function SkillsList({ skillsList }: { skillsList: string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {skillsList.map((skill) => (
        <div
          key={skill}
          className="w-max h-max px-4 py-3 text-xs text-typography opacity-60 bg-[rgba(153,153,153,.2)] rounded-md cursor-default shadow-lg transition hover:opacity-100 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        >
          {skill}
        </div>
      ))}
    </div>
  );
}
