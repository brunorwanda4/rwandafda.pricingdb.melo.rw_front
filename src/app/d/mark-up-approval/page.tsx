export default function MarkupApprovalPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Mark-up Approval</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <p className="text-muted-foreground">
          Review and approve mark-up requests from this dashboard.
        </p>
      </div>
    </div>
  );
}
