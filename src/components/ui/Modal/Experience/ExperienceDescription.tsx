export default function ExperienceDescription({
  description,
}: {
  description: string[];
}) {
  return (
    <>
      {description.map((activity, index) => (
        <div
          key={index}
          className="text-typography font-thin opacity-90 dark:opacity-60"
        >
          {activity}
        </div>
      ))}
    </>
  );
}
