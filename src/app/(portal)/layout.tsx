import { AppSidebar } from "@/src/components/dashboard/app-sidebar";
import { Footer } from "@/src/components/footer";
import { SidebarInset, SidebarProvider } from "@/src/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        {children}
        
      </SidebarInset>
    </SidebarProvider>
  );
}
