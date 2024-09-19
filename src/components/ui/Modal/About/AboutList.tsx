export default function AboutList({ aboutList }: { aboutList: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      {aboutList.map((text, index) => (
        <p
          key={text}
          className={`text-lg text-typography ${
            index === 0 && "first-letter:text-3xl"
          }`}
        >
          {text}
        </p>
      ))}
    </div>
  );
}
