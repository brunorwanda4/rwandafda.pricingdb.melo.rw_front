import DashboardTitle from "../_components/common/dashboard-title";
import MarkupConfiguration from "../_components/mark-up-configuration/MarkupConfiguration";
import RegressiveMarkupTable from "../_components/mark-up-configuration/RegressiveMarkupTable";

const MarkUpConfiguration = () => {
  return (
    <div className="space-y-8">
      <DashboardTitle
        title="Mark-up Policy Configuration"
        desc="Adjust mark-up rates for pharmaceutic product across the supply chain"
        className="max-w-lg"
      />
      <MarkupConfiguration />
      <RegressiveMarkupTable />
    </div>
  );
};

export default MarkUpConfiguration;
