import { useContext, useEffect } from "react";
import ProductCard from "../components/organisms/ProductCard";
import { ProductContext } from "../context/ProductContext/ProductContext";

function ProductList() {
    const { products, fetchProducts } = useContext(ProductContext);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    // if (loading) return <div className="text-center col-span-full">Loading products...</div>
    // if (error) {
    //     const eMsg = Array.isArray(error) ? error.join(", ") : error;
    //     return <div className="text-center col-span-full">Error: {eMsg}</div>;
    // }

    return (
        <main className="container mx-auto px-4 py-8">
            <header>
                breadcrumb
            </header>
            <h2 className="text-2xl font-bold p-10">Productos</h2>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Array.isArray(products) && products.length > 0 ? (
                    products.map((product) => (
                        <div key={ product.id }>
                            <ProductCard product={ product }/>
                        </div>
                    ))
                ) : (
                    <p>Error loading porducts.</p>
                )}
            </section>
        </main>
  )
}

export default ProductList