interface DownloadButtonProps {
  title: string;
}

const DOWNLOAD_LINK =
  "https://drive.google.com/u/0/uc?id=1XcepOiQ_EsIGA78InXy3KgD18ych98f3&export=download";

export default function DownloadButton({ title }: DownloadButtonProps) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = DOWNLOAD_LINK;
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="max-sm:relative sm:absolute bottom-12 sm:right-2/4 rounded-full bg-gradient-to-r from-zinc-600 to-zinc-900 max-sm:p-2 p-3 w-max h-max flex justify-center items-center cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
    >
      <p className="text-gray-100 font-bold max-sm:text-[10px] text-sm">
        {title}
      </p>
    </button>
  );
}
