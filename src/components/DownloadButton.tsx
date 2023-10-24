interface DownloadButtonProps {
  title: string;
  onClick: () => void;
}

export default function DownloadButton({
  title,
  onClick,
}: DownloadButtonProps) {
  return (
    <button
      className="rounded-full bg-gradient-to-r from-zinc-600 to-zinc-900 w-32 h-10 flex justify-center items-center cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      onClick={onClick}
    >
      <p className="text-gray-100 font-bold text-xs">{title}</p>
    </button>
  );
}
