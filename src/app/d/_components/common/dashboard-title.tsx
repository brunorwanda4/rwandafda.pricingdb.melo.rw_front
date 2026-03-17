import { cn } from "@/lib/utils";

interface DashboardTitleProps {
  title: string;
  desc?: string;
  className?: string;
}

const DashboardTitle = ({ title, desc, className }: DashboardTitleProps) => {
  return (
    <div className={cn(" flex flex-col gap-2", className)}>
      <h2 className="text-xl font-semibold">{title}</h2>
      {desc && <p className="text-sm text-gray-600">{desc}</p>}
    </div>
  );
};

export default DashboardTitle;
