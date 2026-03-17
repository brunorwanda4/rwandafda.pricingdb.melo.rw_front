import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DashboardTitle from "../_components/common/dashboard-title";
import PricingAnalysisDashboard from "../_components/report-analytics/PricingAnalysisDashboard";
import { Button } from "@/components/ui/button";
import { LuDownload } from "react-icons/lu";
import SystemAuditLog from "../_components/report-analytics/SystemAuditLog";

export default function ReportAnalyticsPage() {
  return (
    <div className=" space-y-8">
      <div className=" flex flex-col md:flex-row gap-4 justify-between items-center">
        <DashboardTitle
          title="Advanced Analytics"
          desc="Comprehensive pricing analysis, policy enforcement
        tracking, and strategic market intelligence"
        />
        <div className=" flex gap-2 items-center">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Last 6 months" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                key="last-6-months"
                value="last-6-months"
                className=""
              >
                Last 6 months
              </SelectItem>
              <SelectItem key="last-year" value="last-year" className="">
                Last year
              </SelectItem>
            </SelectContent>
          </Select>
          <Button type="button" size={"lg"}>
            <LuDownload />
            <span>Export</span>
          </Button>
        </div>
      </div>
      <PricingAnalysisDashboard />
      <SystemAuditLog />
    </div>
  );
}
