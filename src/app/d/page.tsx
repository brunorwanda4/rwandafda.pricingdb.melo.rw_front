import DashboardTitle from "./_components/common/dashboard-title"
import DashboardOverviewData from "./_components/dashboard/dashboard-overview-data"

const DashboardPage = () => {
  return (
    <div className=" space-y-4">
      <DashboardTitle title="Dashboard Overview" />
      <DashboardOverviewData />
    </div>
  )
}

export default DashboardPage
