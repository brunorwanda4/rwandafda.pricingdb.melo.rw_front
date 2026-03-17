"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SlLogout } from "react-icons/sl";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  DIVISION_MANAGER_dashboardSidebarContentGroups,
  PHARMACEUTIC_SUPPLY_dashboardSidebarContentGroups,
  SUPER_ADMIN_dashboardSidebarContentGroups,
} from "./dashboard-sidebar-content";
import { getLoggedInUser, logoutUser } from "@/helpers/get-login-user";

export function DashboardSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { open } = useSidebar();
  const user = getLoggedInUser();

  const sidebarContent =
    user?.role === "SUPER_ADMIN"
      ? SUPER_ADMIN_dashboardSidebarContentGroups
      : user?.role === "DIVISION_MANAGER"
        ? DIVISION_MANAGER_dashboardSidebarContentGroups
        : user?.role === "PHARMACEUTIC_SUPPLY"
          ? PHARMACEUTIC_SUPPLY_dashboardSidebarContentGroups
          : [];

  return (
    <Sidebar
      collapsible="icon"
      className={cn(" bg-base-100 px-4 z-40", { "px-0": !open })}
    >
      <SidebarHeader className=" bg-base-100 flex flex-row justify-between items-center pt-4">
        {open && (
          <Link href="/d" className=" flex gap-2 items-center">
            <Image src={"/logo.svg"} alt="Logo" height={36} width={36} />
            <h1 className="  text-xl ">Rwanda FDA</h1>
          </Link>
        )}
        <SidebarTrigger className=" cursor-pointer" />
      </SidebarHeader>
      <SidebarContent className="bg-base-100 pt-6">
        {sidebarContent.map((group) => (
          <SidebarGroup key={group.index ?? group.label}>
            <SidebarGroupContent>
              <SidebarMenu className=" flex flex-col gap-2">
                {group.items.map((item) => (
                  <SidebarMenuItem
                    key={item.url}
                    onClick={() => router.push(item.url)}
                    className={cn(
                      " text-neutral",
                      buttonVariants({
                        variant: pathname === item.url ? "default" : "ghost",
                        size: "default",
                        className:
                          !open &&
                          pathname === item.url &&
                          "text-primary bg-base-100 hover:text-primary-content",
                      }),
                      " justify-start  cursor-pointer rounded-sm",
                      !open && "rounded-full ",
                    )}
                  >
                    <item.icon size={24} className="size-5" />
                    {open && <span>{item.title}</span>}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="bg-base-100 pb-10">
        <Button
          onClick={() => logoutUser(router)}
          variant={"ghost"}
          className=" justify-start cursor-pointer"
        >
          <SlLogout />
          <span className={cn(!open && "sr-only")}>Logout</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
