export interface dashboardSearchItemType {
  label: string;
  href: string;
  description?: string;
  category: string;
}

// In your landing-nav-all-pages.ts (or wherever allPages is defined)

export const dashboardSearchItems = [
  {
      label: "Dashboard",
      href: "/d",
      description: "Overview of key metrics and system activity",
      category: "Dashboard",
    },
    {
      label: "Import",
      href: "/d/import",
      description: "Upload and manage food & drug import submissions",
      category: "Dashboard",
    },
    {
      label: "Mark-up Approval",
      href: "/d/mark-up-approval",
      description: "Review and approve product mark-up requests",
      category: "Dashboard",
    },
    {
      label: "Report & Analytics",
      href: "/d/report-analytics",
      description: "View detailed reports and analytical insights",
      category: "Dashboard",
    },
    {
      label: "Settings",
      href: "/d/settings",
      description: "Configure system preferences and account settings",
      category: "Dashboard",
    },
];
