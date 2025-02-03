import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";
import { SidebarProvider } from "../components/ui/sidebar";
import ProductProvider from "../context/ProductContext/ProductProvider";
import CategoryProvider from "../context/CategoryContext/CategoryProvider";

const AdminLayout = () => {
    return (
        <CategoryProvider>
        <ProductProvider>
        <SidebarProvider>
        <AdminSidebar />
        <main className="flex flex-col flex-1 p-5">
            <AdminHeader />
            <Outlet />
        </main>
        </SidebarProvider>
        </ProductProvider>
        </CategoryProvider>
    );
};

export default AdminLayout;