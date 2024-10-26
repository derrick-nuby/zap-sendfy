import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeProvider } from "../theme-provider";
import { AppSidebar } from "@/components/dashboard/app-sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}


const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        {children}
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default DashboardLayout;;