import { Button } from "@/components/ui/button";
import DashboardTitle from "../_components/common/dashboard-title";
import ProductLandingCostTable from "../_components/import/ProductLandingCostTable";
import { MdShowChart } from "react-icons/md";

export default function ImportPage() {
  return (
    <div className="space-y-8">
      <div className=" flex justify-between items-center">
        <DashboardTitle
          title="Product Landing Cost"
          desc="The declared landing cost of imported pharmaceutical products"
        />
        <Button size="xl">
          <MdShowChart className="size-6" />
          <span>Sync IRIMS</span>
        </Button>
      </div>
      <ProductLandingCostTable />
    </div>
  );
}
