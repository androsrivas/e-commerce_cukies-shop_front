import { createBrowserRouter } from "react-router-dom";
import CustomerLayout from "../layout/CustomerLayout";
import AdminLayout from "../layout/AdminLayout";
import ProductList from "../pages/ProductList";

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
                // element: <ProductList />, //mismo elemento que ruta lista
            },               
            {
                path: "crear",
                // element: <ProductForm />
            },
        ],
    },
]);