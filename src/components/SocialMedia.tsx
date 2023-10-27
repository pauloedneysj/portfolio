import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export default function SocialMedia() {
  return (
    <div
      id="social-media"
      className="max-sm:relative absolute flex flex-row items-center max-sm:gap-4 gap-8 max-sm:-ml-2 ml-12 max-sm:bottom-12 bottom-12"
    >
      <Link href="https://github.com/pauloedneysj">
        <AiFillGithub
          id="github"
          size={34}
          className="hover:animate-pulse transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
        />
      </Link>
      <Link href="https://www.linkedin.com/in/pauloedney">
        <AiFillLinkedin
          id="linkedin"
          size={36}
          className="hover:animate-pulse transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
        />
      </Link>
      <Link href="https://www.instagram.com/pauloedneysj/">
        <AiOutlineInstagram
          id="instagram"
          size={36}
          className="hover:animate-pulse transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
        />
      </Link>
    </div>
  );
}
