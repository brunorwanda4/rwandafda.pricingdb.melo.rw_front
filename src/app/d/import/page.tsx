export default function ImportPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Import</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <p className="text-muted-foreground">
          Welcome to the Import section. Here you can upload and process your pricing data files.
        </p>
      </div>
    </div>
  );
}
