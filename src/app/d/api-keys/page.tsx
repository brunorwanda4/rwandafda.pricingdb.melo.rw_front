import ApiDocumentation from "../_components/api-keys/api-documentation";
import ApiKeyManager from "../_components/api-keys/api-key-manager";
import ApiMetricsOverview from "../_components/api-keys/api-metrics-overview";
import CreateApiKeyDialog from "../_components/api-keys/create-api-key-dialog";
import DashboardTitle from "../_components/common/dashboard-title";

const ApiKeysPage = () => {
  return (
    <div className=" space-y-8">
      <div className=" flex justify-between items-center">
        <DashboardTitle
          desc="Manage API for system integration and external access"
          title="API Keys Management"
        />
        <CreateApiKeyDialog />
      </div>
      <ApiMetricsOverview />
      <ApiKeyManager />
      <ApiDocumentation />
    </div>
  );
};

export default ApiKeysPage;
