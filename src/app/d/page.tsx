import DashboardTitle from "./_components/common/dashboard-title"
import DashboardOverviewData from "./_components/dashboard/dashboard-overview-data"
import PricingTrendChart from "./_components/dashboard/pricing-trend-chart"

const DashboardPage = () => {
  return (
    <div className=" space-y-8">
      <DashboardTitle title="Dashboard Overview" />
      <DashboardOverviewData />
      <PricingTrendChart />
    </div>
  )
}

export default DashboardPage
