import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import DashboardNavbar from "./_components/navbar/dashboard-navbar";
import { DashboardSidebar } from "./_components/sidebar/dashboard-sidebar";
import DashboardFooter from "./_components/footer/dashboard-footer";

const DashboardLayout = (props: LayoutProps<"/d">) => {
  return (
    <SidebarProvider className="">
      <DashboardSidebar />
      <main className="bg-base-200 w-full relative ">
        <DashboardNavbar />
        <div className=" pt-20 pb-10 md:px-8 px-4 min-h-screen">
          {props.children}
        </div>
        <DashboardFooter />
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
