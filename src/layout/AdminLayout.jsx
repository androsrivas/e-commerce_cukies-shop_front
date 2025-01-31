import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";
import { SidebarProvider } from "../components/ui/sidebar";

const AdminLayout = () => {
    return (
        <SidebarProvider>
        <main className="flex h-screen">
            <AdminSidebar />
            <AdminHeader />
            <Outlet />
        </main>
        </SidebarProvider>
    );
};

export default AdminLayout;