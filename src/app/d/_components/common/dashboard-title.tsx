interface DashboardTitleProps {
  title: string;
  desc?: string;
}

const DashboardTitle = ({ title, desc }: DashboardTitleProps) => {
  return (
    <div className=" flex flex-col gap-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      {desc && <p className="text-sm text-gray-600">{desc}</p>}
    </div>
  );
};

export default DashboardTitle;
