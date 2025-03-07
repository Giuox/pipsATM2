import { AppSidebar } from "@/components/layout/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 flex">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content */}
        <div className="flex-1 ml-8">{children}</div>
      </div>
    </main>
  );
};

export default DashboardLayout;
