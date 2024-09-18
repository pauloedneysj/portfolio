interface ButtonProps {
  title: string;
  onClick?: () => void;
}

export default function Button({ title, onClick }: ButtonProps) {
  return (
    <button
      id="button"
      onClick={onClick}
      className="border-2 border-typography text-typography hover:text-primary hover:bg-typography dark:text-typography dark:hover:text-primary dark:hover:bg-typography  dark:border-typography max-sm:p-2 p-3 w-max h-max flex justify-center items-center cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
    >
      <p className="font-bold max-sm:text-[10px] text-xs">{title}</p>
    </button>
  );
}
