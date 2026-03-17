import { Card, CardContent } from "@/components/ui/card";
import { Package, AlertCircle, Users, CheckCircle2 } from "lucide-react";

const DashboardOverviewData = () => {
  const stats = [
    {
      title: "Total Products",
      value: "12,450",
      change: "+2.5% from last month",
      icon: <Package className="w-6 h-6 text-blue-600" />,
      iconBg: "bg-blue-50",
    },
    {
      title: "Pending Approvals",
      value: "145",
      change: "+12.3% from last month",
      icon: <AlertCircle className="w-6 h-6 text-orange-500" />,
      iconBg: "bg-orange-50",
    },
    {
      title: "Active Stakeholders",
      value: "89",
      change: "+5.2% from last month",
      icon: <Users className="w-6 h-6 text-teal-600" />,
      iconBg: "bg-teal-50",
    },
    {
      title: "Approved This Month",
      value: "5",
      change: "+18.7% from last month",
      icon: <CheckCircle2 className="w-6 h-6 text-green-600" />,
      iconBg: "bg-green-50",
    },
  ];
  return (
    <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
      {stats.map((stat, index) => (
        <Card key={index} className="border-none shadow-sm">
          <CardContent className="">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-sm font-medium text-slate-500">
                  {stat.title}
                </p>
                <h3 className="text-3xl font-bold tracking-tight text-slate-900">
                  {stat.value}
                </h3>
                <p className="text-sm font-semibold text-emerald-600">
                  {stat.change}
                </p>
              </div>
              <div className={`p-3 rounded-xl ${stat.iconBg}`}>{stat.icon}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export default DashboardOverviewData;
