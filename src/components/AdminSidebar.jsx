import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem
} from "@/components/ui/sidebar";
import { NavLink } from "react-router-dom";

export default function AppSidebar() {

    return (
        <Sidebar>
            <SidebarHeader>
                <p>Cukies Shop</p>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Productos</SidebarGroupLabel>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <NavLink to="/admin/productos" >Productos</NavLink>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <NavLink to="/admin/productos/crear">Crear producto</NavLink>
                        </SidebarMenuItem>
                    </SidebarMenu>
                    <SidebarGroupLabel>Categorías</SidebarGroupLabel>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <NavLink to="/admin/categorias">Categorias</NavLink>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <NavLink to="/admin/productos/crear">Crear categoria</NavLink>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
};