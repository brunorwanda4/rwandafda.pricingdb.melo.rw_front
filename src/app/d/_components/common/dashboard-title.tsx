interface DashboardTitleProps {
  title: string;
}

const DashboardTitle = ({ title }: DashboardTitleProps) => {
  return (
    <h2 className="text-xl font-semibold">
      {title}
    </h2>
  );
};

export default DashboardTitle;
