"use client";

import { usePathname } from "next/navigation";
import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import DashboardNavNotificationSheet from "./dashboard-nav-notfication-sheet";
import DashboardNavProfile from "./dashboard-nav-profile";
import DashboardSearch from "./dashboard-seach";

const DashboardNavbar = () => {
  const pathname = usePathname();
  const { open } = useSidebar();


  return (
    <header
      className={cn(
        " bg-base-100 fixed w-full h-16 pl-8 items-center pr-74 flex justify-between py-4",
        !open && "pr-20",
      )}
    >
      <div>
        <DashboardSearch />
      </div>
      <nav className=" flex gap-4 items-center">
        <DashboardNavNotificationSheet />
        <DashboardNavProfile />
      </nav>
    </header>
  );
};

export default DashboardNavbar;
