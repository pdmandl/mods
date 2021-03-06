import Image from "next/image";
import { HomeIcon, PencilAltIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import SidebarLink from "./SidebarLink";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="text-black flex items-center xl:ml-24 justify-center xl:justify-start text-xl space-x-3 hoverAnimation">
        mods<span className="hidden xl:inline">.social</span>
      </div>
      <div className="space-y-2.5 mb-2.5 xl:ml-24 xl:mt-7 bg-white shadow-md rounded-xl border border-black">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <div className="text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-3 w-[52px] h-[52px] xl:w-auto xl:h-auto xl:py-3 xl:px-4 transition hover:text-white rounded-full hover:bg-[#0567a6]">
          <PencilAltIcon className="h-7 text-black" />
          <span className="hidden xl:inline text-black">Publish</span>
        </div>
      </div>
      <div
        className="text-black shadow-md  flex items-center bg-white rounded-xl border border-black justify-center mt-auto hoverAnimation xl:ml-auto xl:-mr-5"
        onClick={signOut}
      >
        <img
          src={session.user.image}
          alt=""
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">{session.user.name}</h4>
          <p className="text-[#6e767d]">@{session.user.tag}</p>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  );
}

export default Sidebar;
