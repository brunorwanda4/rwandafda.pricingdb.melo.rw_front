import type { IconType } from "react-icons";
import { CiGrid42 } from "react-icons/ci";
import { MdOutlineApproval } from "react-icons/md";
import { HiOutlineDocumentArrowUp } from "react-icons/hi2";
import { TbReportAnalytics } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineHome, HiOutlineUsers, HiOutlineKey } from "react-icons/hi2";
import { FiBookOpen, FiSettings } from "react-icons/fi";
import { LuSquareUser } from "react-icons/lu";
import { BsCheckCircle } from "react-icons/bs";

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
          icon: BsCheckCircle,
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

export const SUPER_ADMIN_dashboardSidebarContentGroups: sidebarGroupsProps[] = [
  {
    label: "Main",
    items: [
      {
        title: "Dashboard",
        icon: HiOutlineHome,
        url: "/d",
      },
      {
        title: "System roles",
        icon: LuSquareUser,
        url: "/d/system-roles",
      },
      {
        title: "User Management",
        icon: HiOutlineUsers,
        url: "/d/user-management",
      },
      {
        title: "API Keys",
        icon: HiOutlineKey,
        url: "/d/api-keys",
      },
      {
        title: "Settings",
        icon: FiSettings,
        url: "/d/settings",
      },
    ],
  },
];
