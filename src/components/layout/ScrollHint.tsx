import { FaArrowTurnDown } from "react-icons/fa6";

type ScrollHintProps = {
  isVisible: boolean;
};

export default function ScrollHint({ isVisible }: ScrollHintProps) {
  return (
    <div
      className={`fixed flex-col gap-6 items-center max-[1080px]:right-8 right-20 bottom-8 max-sm:hidden scroll-hint-opacity ${
        isVisible ? "" : "hidden"
      }`}
    >
      <FaArrowTurnDown className="animate-bounce w-12 h-12 max-[1080px]:w-8 max-[1080px]:h-8 text-typography" />
    </div>
  );
}
