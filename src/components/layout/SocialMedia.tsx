import links from "@/utils/variables/links";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export default function SocialMedia() {
  return (
    <div
      id="social-media"
      className="flex flex-row items-center max-sm:gap-4 gap-8"
    >
      <Link href={links.github} target="_blank">
        <AiFillGithub
          id="github"
          size={34}
          className="text-typography hover:animate-pulse transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
        />
      </Link>
      <Link href={links.linkedin} target="_blank">
        <AiFillLinkedin
          id="linkedin"
          size={36}
          className="text-typography hover:animate-pulse transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
        />
      </Link>
      <Link href={links.instagram} target="_blank">
        <AiOutlineInstagram
          id="instagram"
          size={36}
          className="text-typography hover:animate-pulse transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
        />
      </Link>
    </div>
  );
}
