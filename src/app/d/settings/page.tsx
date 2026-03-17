import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UpdateUserForm from "../_components/settings/UpdateUserForm";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import { BsPerson, BsShield } from "react-icons/bs";
import DashboardTitle from "../_components/common/dashboard-title";
import UpdatePasswordForm from "../_components/settings/UpdatePasswordForm";
import ActiveSessionsForm from "../_components/settings/ActiveSessionsForm";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <Tabs defaultValue="profile" className=" space-y-8">
        <TabsList>
          <TabsTrigger
            value="profile"
            className="rounded-l-md rounded-r-none px-4 py-4 border-base-300"
          >
            <BsPerson />
            <span>Profile</span>
          </TabsTrigger>
          <TabsTrigger
            value="security"
            className="rounded-r-md rounded-l-none px-4 py-4 border border-base-300 "
          >
            <BsShield />
            <span>Security</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className=" space-y-4">
          <DashboardTitle
            title="Profile information"
            desc="Update your personal information and contact details"

          />
          <UpdateUserForm />
        </TabsContent>
        <TabsContent value="security" className="space-y-8">
          <DashboardTitle
            title="Security settings"
            desc="Update your password and security preferences"
          />
          <UpdatePasswordForm />
          <ActiveSessionsForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
