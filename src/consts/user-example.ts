import type { UserRole, UserType } from "@/types/user";

export const usersExamples: UserType[] = [
  {
    name: "John Doe",
    role: "SUPER_ADMIN",
    email: "superadmin@example.com",
    password: "password123",
  },
  {
    name: "Alice Johnson",
    role: "DIVISION_MANAGER",
    email: "division.manager@example.com",
    password: "password123",
  },
  {
    name: "Robert Smith",
    role: "PHARMACEUTIC_SUPPLY",
    email: "supply.chain@example.com",
    password: "password123",
  },
  {
    name: "Elena Rodriguez",
    role: "MARKET_SUPPORT",
    email: "market.support@example.com",
    password: "password123",
  },
  {
    name: "Sarah Chen",
    role: "STAKEHOLDERS",
    email: "stakeholder@example.com",
    password: "password123",
  },
];

export const ROLE_PERMISSIONS_DATA = [
  {
    role: "SUPER_ADMIN" as UserRole,
    title: "Super Admin (Rwanda FDA IT Team)",
    description:
      "Full system access including user management, system configuration, and all administrative functions",
    userCount: 3,
    permissions: {
      userManagement: true,
      roleManagement: true,
      systemSettings: true,
      dataImportExport: true,
      auditLogAccess: true,
      apiManagement: true,
    },
  },
  {
    role: "DIVISION_MANAGER" as UserRole,
    title: "Division Manager",
    description:
      "Compliance oversight, policy management, and regulatory enforcement",
    userCount: 5,
    permissions: {
      userManagement: false,
      roleManagement: false,
      systemSettings: false,
      dataImportExport: true,
      auditLogAccess: false,
      apiManagement: false,
    },
  },
  {
    role: "PHARMACEUTIC_SUPPLY" as UserRole,
    title: "Pharmaceutical Production and Supply Chain Staff",
    description:
      "Product registration, supply chain management, and pricing data entry",
    userCount: 12,
    permissions: {
      userManagement: false,
      roleManagement: false,
      systemSettings: false,
      dataImportExport: true,
      auditLogAccess: false,
      apiManagement: false,
    },
  },
  {
    role: "MARKET_SUPPORT" as UserRole,
    title: "Market, Pricing and Industrial Support Analyst",
    description: "Pricing analysis, market monitoring, and trend analysis",
    userCount: 8,
    permissions: {
      userManagement: false,
      roleManagement: false,
      systemSettings: false,
      dataImportExport: true,
      auditLogAccess: false,
      apiManagement: false,
    },
  },
  {
    role: "STAKEHOLDERS" as UserRole,
    title: "High-Level Government Stakeholders",
    description:
      "Dashboard viewing, report access, and policy insights (read-only)",
    userCount: 15,
    permissions: {
      userManagement: false,
      roleManagement: false,
      systemSettings: false,
      dataImportExport: false,
      auditLogAccess: false,
      apiManagement: false,
    },
  },
];
