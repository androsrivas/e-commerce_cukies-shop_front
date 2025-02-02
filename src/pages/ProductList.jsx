import { useContext } from "react";
import { ProductContext } from "../context/ProductContext/ProductContext";
import ProductCard from "../components/organisms/ProductCard";
import { useEffect } from "react";

function ProductList() {
    const { products, loading, errors, fetchAllProducts } = useContext(ProductContext);

    useEffect(() => {
        fetchAllProducts();
    }, []);

    if (loading) return <div className="text-center col-span-full">Loading products...</div>
    if (errors?.length) return <div className="text-center col-span-full">Error: {errors.join(", ")}</div>;

    return (
        <main className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold p-10">Productos</h2>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Array.isArray(products) && products.length > 0 ? (
                    products.map((product) => (
                        <div key={ product.name }>
                            <ProductCard product={ product }/>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-full">{ errors.join(", ") }</p>
                )}
            </section>
        </main>
  )
}

export default ProductList