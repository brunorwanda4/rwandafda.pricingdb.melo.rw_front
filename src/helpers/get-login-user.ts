import type { UserType } from "@/types/user";

export const getLoggedInUser = () => {
  if (typeof window === "undefined") return null;

  const data = localStorage.getItem("login_user_data");

  if (!data) return null;

  try {
    return JSON.parse(data) as UserType;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const logoutUser = (router: any) => {
  localStorage.removeItem("login_user_data");

  router.push("/");
};
