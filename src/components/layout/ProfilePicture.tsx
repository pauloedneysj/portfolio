import Image from "next/image";
import profilePicture from "@/img/profile-picture.png";
export default function ProfilePicture() {
  return (
    <div className="flex items-end max-[950px]:w-40 max-[950px]:h-40 w-52 h-52 border-b-4 border-secondary shadow-xl rounded-full overflow-hidden hover:grayscale-0 grayscale transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <Image
        src={profilePicture}
        alt="Profile picture"
        className="w-72 h-72 object-cover max-[950px]:w-60 max-[950px]:h-60"
        priority
      />
    </div>
  );
}
