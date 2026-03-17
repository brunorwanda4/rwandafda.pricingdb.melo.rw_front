import ApiMetricsOverview from "../_components/api-keys/api-metrics-overview";
import DashboardTitle from "../_components/common/dashboard-title";
import UserRoleManager from "../_components/system-roles/UserRoleManager";

const SystemRolesPage = () => {
  return (
    <div className=" space-y-8">
      <div className=" flex justify-between items-center">
        <DashboardTitle
          desc="System Role Management"
          title="Configure user roles and permissions levels"
        />
      </div>
      <ApiMetricsOverview />
      <UserRoleManager />
    </div>
  );
};

export default SystemRolesPage;
