import { Button } from "@/components/ui/button";
import DashboardTitle from "../_components/common/dashboard-title";
import { BiPackage } from "react-icons/bi";
import ProductManagementTable from "../_components/product-management/ProductManagementTable";

const ProductManagementPage = () => {
  return (
    <div className="space-y-8">
      <div className=" flex justify-between items-center">
        <DashboardTitle
          title="Product Registration"
          desc="Manage pharmaceutical registrations and details"
        />

        <Button size={"lg"}>
          <BiPackage />
          <span>Sync NPC Products</span>
        </Button>
      </div>
      <ProductManagementTable />
    </div>
  );
};

export default ProductManagementPage;
