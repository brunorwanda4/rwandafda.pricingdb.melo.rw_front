"use client";

import { usePathname } from "next/navigation";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import DashboardNavNotificationSheet from "./dashboard-nav-notfication-sheet";
import DashboardNavProfile from "./dashboard-nav-profile";
import DashboardSearch from "./dashboard-seach";
import { MobileLogo } from "@/app/(auth)/_components/auth-logo";

const DashboardNavbar = () => {
  const pathname = usePathname();
  const { open } = useSidebar();

  return (
    <header
      className={cn(
        " bg-base-100 fixed w-full h-16 pl-8 items-center md:pr-74 pr-4 flex justify-between py-4 border-b border-b-base-300 z-50",
        !open && "md:pr-26",
      )}
    >
      <div className=" items-center flex justify-between w-full">
        <div className=" flex md:hidden items-center gap-2">
          <SidebarTrigger className=" cursor-pointer size-8" />
          <MobileLogo />
        </div>
        <div className=" w-full flex justify-center md:justify-start">
          <DashboardSearch />
        </div>
      </div>
      <nav className=" flex gap-4 items-center">
        <DashboardNavNotificationSheet />
        <DashboardNavProfile />
      </nav>
    </header>
  );
};

export default DashboardNavbar;
