import DashboardTitle from "../_components/common/dashboard-title";
import UserOverview from "../_components/user-management/UserOverview";

const UserManagement = () => {
  return (
    <div className=" space-y-8">
      <div className=" flex justify-between items-center">
        <DashboardTitle
          desc="System Role Management"
          title="Configure user roles and permissions levels"
        />
      </div>
      <UserOverview />
    </div>
  );
};

export default UserManagement;
