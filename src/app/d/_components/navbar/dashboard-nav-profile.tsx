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

const DashboardNavProfile = () => {


  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className=" flex items-center gap-2 cursor-pointer">
          <Avatar>
            <AvatarImage src="/images/profile.jpg" />
            <AvatarFallback>PR</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1 ">
            <span className=" text-sm leading-4">User Name</span>
            <span className=" text-xs leading-2">user Role</span>
          </div>
       </div>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className=" flex gap-2">
          <Avatar size="lg">
            <AvatarImage src="/images/profile.jpg" />
            <AvatarFallback>PR</AvatarFallback>
          </Avatar>
          <div className=" flex flex-col">
            <span>User Name</span>
            <span>user Role</span>
          </div>
        </div>
        <Separator />
        <Button
          variant={"ghost"}
          className=" justify-start cursor-pointer rounded-md"
          onClick={() => {}}
        >
          <SlLogout />
          <span>Logout</span>
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default DashboardNavProfile;
