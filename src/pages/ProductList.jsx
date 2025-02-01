import { useContext } from "react";
import { ProductContext } from "../context/ProductContext/ProductContext";
import ProductCard from "../components/organisms/ProductCard";

function ProductList() {
    const { products } = useContext(ProductContext);

    return (
        <main className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold p-10">Productos</h2>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    <div key={ product.name }>
                        <ProductCard 
                            product={ product }
                        />
                    </div>
                ))}
            </section>
        </main>
  )
}

export default ProductList