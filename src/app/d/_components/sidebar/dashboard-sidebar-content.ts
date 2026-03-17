import type { IconType } from "react-icons";
import { CiGrid42 } from "react-icons/ci";
import { MdOutlineApproval } from "react-icons/md";
import { HiOutlineDocumentArrowUp } from "react-icons/hi2";
import { TbReportAnalytics } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

export type SidebarItem = {
  title: string;
  icon: IconType;
  url: string;
  children?: SidebarItem[];
};

export type sidebarGroupsProps = {
  label?: string;
  items: SidebarItem[];
  index?: number;
};

export const DIVISION_MANAGER_dashboardSidebarContentGroups: sidebarGroupsProps[] =
  [
    {
      label: "Dashboard",
      items: [
        {
          title: "Dashboard",
          icon: CiGrid42,
          url: "/d",
        },
        {
          title: "Import",
          icon: HiOutlineDocumentArrowUp,
          url: "/d/import",
        },
        {
          title: "Mark-up Approval",
          icon: MdOutlineApproval,
          url: "/d/mark-up-approval",
        },
        {
          title: "Report & Analytics",
          icon: TbReportAnalytics,
          url: "/d/report-analytics",
        },
        {
          title: "Settings",
          icon: IoSettingsOutline,
          url: "/d/settings",
        },
      ],
    },
  ];
