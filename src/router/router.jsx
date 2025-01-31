import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <CustomerLayout />,
        children: [
            {
                path: "/",
                element: "LandingPage o Home",
                children: [
                    {
                        path: "/tienda",
                        element: "Shop",
                        children: [
                            {
                                path: "/producto/:productId",
                                element: "Producto"
                            }
                        ]
                    },
                    {
                        path: "/carrito",
                        element: "Checkout"
        
                    }
                ]
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                path: "dashboard",
                element: "Inicio de dashboard",
                children: [
                    {
                        path: "productos",
                        element: "Todos los productos", //mismo elemento que ruta lista
                        children: [
                            {
                                path: "lista",
                                element: "Todos los productos"
                            },
                            {
                                path: "crear",
                                element: "Formulario añadir producto"
                            }
                        ]
                    }
                ]
            }
        ]
    }
]);