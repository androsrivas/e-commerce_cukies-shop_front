import { createBrowserRouter } from "react-router-dom";
import CustomerLayout from "../layout/CustomerLayout";
import AdminLayout from "../layout/AdminLayout";
import ProductList from "../pages/ProductList";
import AdminProductList from "../pages/admin/AdminProductList";
import AddProduct from "../pages/admin/AddProduct";
import AdminCategoryList from "../pages/admin/AdminCategoryList";
import AddCategory from "../pages/admin/AddCategory";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <CustomerLayout />,
        children: [
            {
                path: "",
                element: "LandingPage o Home"
            },
            {
                path: "tienda",
                element: <ProductList />,
            },
            {
                path: "producto/:productId",
                element: "Producto"
            },    
            {
                path: "carrito",
                element: "Checkout"

            },
        ],
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                path: "",
                // element: <AdminDashboard />,
            },
            {
                path: "productos",
                element: <AdminProductList />
            },               
            {
                path: "crear-producto",
                element: <AddProduct />
            },
            {
                path: "categorias",
                element: <AdminCategoryList />
            },
            {
                path: "crear-categoria",
                element: <AddCategory />
            }
        ],
    },
]);