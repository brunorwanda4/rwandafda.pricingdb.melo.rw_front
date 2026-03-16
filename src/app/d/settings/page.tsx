export default function SettingsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
      </div>
      <div className="grid gap-4">
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium">Application Settings</h3>
            <p className="text-sm text-muted-foreground">
              Manage your account and system preferences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
