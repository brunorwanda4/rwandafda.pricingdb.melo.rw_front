import type { UserRole } from "@/types/user";

export const formatUserRole = (role: UserRole | string): string => {
  if (!role) return "";

  return role
    .toLowerCase() // 1. super_admin
    .replace(/_/g, " ") // 2. super admin
    .replace(/\b\w/g, (char) => char.toUpperCase()); // 3. Super Admin
};

export const getInitials = (name: string): string => {
  if (!name) return "??";

  const initials = name
    .trim() // Remove extra spaces at start/end
    .split(/\s+/) // Split by any number of spaces
    .map((word) => word[0]) // Take the first letter of each word
    .join("") // Join them back together (e.g., "JD")
    .toUpperCase(); // Ensure they are uppercase

  // If the name is long (e.g., "John Michael Doe"),
  // you might only want the first 2 letters.
  return initials.length > 2 ? initials.substring(0, 2) : initials;
};
