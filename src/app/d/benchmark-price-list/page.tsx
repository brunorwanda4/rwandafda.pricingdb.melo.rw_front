import { LuDownload } from "react-icons/lu";
import DashboardTitle from "../_components/common/dashboard-title";
import { Button } from "@/components/ui/button";
import PriceBenchmarkTable from "../_components/benchmark-price-list/PriceBenchmarkTable";

const BenchmarkPriceListPage = () => {
  return (
    <div className="space-y-8">
      <div className=" flex justify-between items-center">
        <DashboardTitle
          title="Market Price Benchmark List"
          desc="Approved price reference list for stakeholder access"
        />

        <Button size={"lg"}>
          <LuDownload />
          <span>Export PDF</span>
        </Button>
      </div>
      <div className="bg-[#D9E9FF] p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-md">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            February 2026 Price Benchmark
          </h2>
          <p className="text-slate-600 font-medium">
            Published by Rwanda FDA - Official Reference
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm font-bold text-slate-800">
          <span className="flex items-center gap-1.5 bg-white/40 px-3 py-1 rounded-full">
            Approved
          </span>
          <span>Published: Feb 1, 2026</span>
        </div>
      </div>
      <PriceBenchmarkTable />
    </div>
  );
};

export default BenchmarkPriceListPage;
