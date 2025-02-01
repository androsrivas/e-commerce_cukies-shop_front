import { createBrowserRouter } from "react-router-dom";
import CustomerLayout from "../layout/CustomerLayout";
import AdminLayout from "../layout/AdminLayout";
import ProductList from "../pages/ProductList";
import AdminProductList from "../pages/admin/AdminProductList";

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
                path: "crear",
                // element: <ProductForm />
            },
        ],
    },
]);