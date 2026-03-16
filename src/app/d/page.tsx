import DashboardTitle from "./_components/common/dashboard-title";
import DashboardOverviewData from "./_components/dashboard/dashboard-overview-data";
import PricingTrendChart from "./_components/dashboard/pricing-trend-chart";
import RecentActivity from "./_components/dashboard/recent-activity";

const DashboardPage = () => {
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
