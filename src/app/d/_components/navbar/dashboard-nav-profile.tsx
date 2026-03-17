"use client";
import { SlLogout } from "react-icons/sl";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { getLoggedInUser, logoutUser } from "@/helpers/get-login-user";
import { useRouter } from "next/navigation";
import { formatUserRole, getInitials } from "@/helpers/format-text";
import Link from "next/link";
import { FiSettings } from "react-icons/fi";

const DashboardNavProfile = () => {
  const user = getLoggedInUser();
  const router = useRouter();
  if (!user) return null;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className=" flex items-center gap-2 cursor-pointer">
          <Avatar>
            <AvatarImage src="/images/profile.jpg" />
            <AvatarFallback>{getInitials(user?.name)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1 max-lg:hidden ">
            <span className=" text-sm leading-4 line-clamp-1">
              {user?.name}
            </span>
            <span className=" text-xs leading-2 line-clamp-1">
              {formatUserRole(user?.role)}
            </span>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className=" flex gap-2">
          <Avatar size="lg">
            <AvatarImage src="/images/profile.jpg" />
            <AvatarFallback>{getInitials(user?.name)}</AvatarFallback>
          </Avatar>
          <div className=" flex flex-col">
            <span>{user?.name}</span>
            <span>{formatUserRole(user?.role)}</span>
          </div>
        </div>
        <Button
          variant={"ghost"}
          onClick={() => router.push("/d/settings")}
          className=" justify-start mt-4"
        >
          <FiSettings /> Setting
        </Button>
        <Separator />
        <Button
          variant={"ghost"}
          className=" justify-start cursor-pointer rounded-md"
          onClick={() => logoutUser(router)}
        >
          <SlLogout />
          <span>Logout</span>
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default DashboardNavProfile;
