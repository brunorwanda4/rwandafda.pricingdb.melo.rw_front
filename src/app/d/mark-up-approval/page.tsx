import {
  ItemDescription,
  Item,
  ItemContent,
  ItemActions,
  ItemTitle,
} from "@/components/ui/item";
import DashboardTitle from "../_components/common/dashboard-title";
import MarkupApproval from "../_components/mark-up-approval/MarkupApproval";

export default function MarkupApprovalPage() {
  return (
    <div className=" space-y-8">
      <div className=" flex justify-between items-center">
        <DashboardTitle
          title="Approvals"
          desc="Review and approve pending requests"
        />
        <Item
          variant={"outline"}
          className="bg-warning/10 w-fit border-warning"
        >
          <ItemContent className=" text-warning justify-center items-center">
            <ItemTitle className=" text-warning text-lg">
              Pending Approvals
            </ItemTitle>
            <ItemActions className=" text-warning text-2xl">2</ItemActions>
          </ItemContent>
        </Item>
      </div>
      <MarkupApproval />
    </div>
  );
}
