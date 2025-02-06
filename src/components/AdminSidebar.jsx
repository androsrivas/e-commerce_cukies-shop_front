import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem
} from "@/components/ui/sidebar";
import { NavLink, useLocation } from "react-router-dom";

export default function AppSidebar() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    }

    return (
        <Sidebar>
            <SidebarHeader>
                <p>Cukies Shop</p>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup className="p-5">
                    <SidebarGroupLabel className="text-lg">Productos</SidebarGroupLabel>
                    <SidebarMenu>
                        <SidebarMenuItem className={isActive("/admin/productos") ? "active" : ""}>
                            <NavLink to="/admin/productos" className={({ isActive }) => isActive ? "active" : ""}>
                                Productos
                            </NavLink>
                        </SidebarMenuItem>
                        <SidebarMenuItem className={isActive("/admin/crear-producto") ? "active" : ""}>
                            <NavLink to="/admin/crear-producto" className={({ isActive }) => isActive ? "active" : ""}>
                                Crear producto
                            </NavLink>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
                <SidebarGroup className="p-5">
                    <SidebarGroupLabel className="text-lg">Categorías</SidebarGroupLabel>
                    <SidebarMenu>
                        <SidebarMenuItem className={isActive("/admin/categorias") ? "active" : ""}>
                            <NavLink to="/admin/categorias" className={({ isActive }) => isActive ? "active" : ""}>Categorias</NavLink>
                        </SidebarMenuItem>
                        <SidebarMenuItem className={isActive("/admin/crear-categoria") ? "active" : ""}>
                            <NavLink to="/admin/crear-categoria" className={({ isActive }) => isActive ? "active" : ""}>Crear categoria</NavLink>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
};