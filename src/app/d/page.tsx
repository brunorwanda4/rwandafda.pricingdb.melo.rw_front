"use client";
import { redirect } from "next/navigation";
import DashboardTitle from "./_components/common/dashboard-title";
import DashboardOverviewData from "./_components/dashboard/dashboard-overview-data";
import PricingTrendChart from "./_components/dashboard/pricing-trend-chart";
import RecentActivity from "./_components/dashboard/recent-activity";
import { getLoggedInUser } from "@/helpers/get-login-user";
import DataOverview from "./_components/dashboard/data-overview";
import SystemResources from "./_components/dashboard/system-resources";

const DashboardPage = () => {
  const user = getLoggedInUser();
  if (!user) {
    return redirect("/");
  }

  switch (user.role) {
    case "SUPER_ADMIN":
      return (
        <div className=" space-y-8">
          <DashboardTitle
            desc="Monitor system health, user activity, and platform performance"
            title="System Administration Dashboard"
          />
          <DataOverview />
          <div>
            <SystemResources />
          </div>
        </div>
      );
    case "DIVISION_MANAGER":
      return (
        <div className=" space-y-8">
          <DashboardTitle title="Dashboard Overview" />
          <DashboardOverviewData />
          <PricingTrendChart />
          <RecentActivity />
        </div>
      );
    default:
      break;
  }

  return (
    <div className=" space-y-8">
      <DashboardTitle title="Dashboard Overview" />
      <DashboardOverviewData />
      <PricingTrendChart />
      <RecentActivity />
    </div>
  );
};

export default DashboardPage;
