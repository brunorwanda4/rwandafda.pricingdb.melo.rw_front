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
        <Avatar>
          <AvatarImage src="/images/profile.jpg" />
          <AvatarFallback>PR</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className=" flex gap-2">
          <Avatar size="lg">
            <AvatarImage src="/images/profile.jpg" />
            <AvatarFallback>PR</AvatarFallback>
          </Avatar>
          <div className=" flex flex-col">
            <span>Name</span>
            <span>Role</span>
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
