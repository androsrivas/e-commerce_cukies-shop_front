import { useContext } from "react"
import ProductTable from "../../components/organisms/ProductTable"
import { ProductContext } from "../../context/ProductContext/ProductContext"
import { useEffect } from "react";

function AdminProductList() {
    const { products, loading, errors, fetchAllProducts } = useContext(ProductContext);

    useEffect(() => {
        fetchAllProducts();
    }, []);

    if (loading) return <div>Loading products...</div>;
    if (errors?.length) return <div>Error: {errors.join(", ")}</div>;

  return (
    <main>
        <div>
            <section className="p-5">
                <p>Aqui anirà el botó de categories i el checkbox de disponible</p>
            </section>
            <section className="p-5">
                <h2 className="text-3xl">Productos</h2>
                <ProductTable 
                    products={ products }
                />
            </section>
        </div>
    </main>
  )
}

export default AdminProductList