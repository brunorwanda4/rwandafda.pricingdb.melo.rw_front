import ApiMetricsOverview from "../_components/api-keys/api-metrics-overview";
import DashboardTitle from "../_components/common/dashboard-title";

const ApiKeysPage = () => {
  return (
    <div className=" space-y-8">
      <DashboardTitle
        desc="Manage API for system integration and external access"
        title="API Keys Management"
      />
      <ApiMetricsOverview />
    </div>
  );
};

export default ApiKeysPage;
