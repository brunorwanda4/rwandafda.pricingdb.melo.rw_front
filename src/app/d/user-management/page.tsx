import DashboardTitle from "../_components/common/dashboard-title";
import UserManagementTable from "../_components/user-management/UserManagementTable";
import UserOverview from "../_components/user-management/UserOverview";

const UserManagement = () => {
  return (
    <div className=" space-y-8">
      <div className=" flex justify-between items-center">
        <DashboardTitle
          title="User Management"
          desc="Manage system users and access control"
        />
      </div>
      <UserOverview />
      <UserManagementTable />
    </div>
  );
};

export default UserManagement;
