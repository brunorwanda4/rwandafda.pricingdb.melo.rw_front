export const userRoles = [
  "SUPER_ADMIN",
  "DIVISION_MANAGER",
  "PHARMACEUTIC_SUPPLY",
  "MARKET_SUPPORT",
  "STAKEHOLDERS",
] as const;

export type UserRole = (typeof userRoles)[number];

export type UserType = {
  name: string;
  role: UserRole;
  email: string;
  password: string;
};
