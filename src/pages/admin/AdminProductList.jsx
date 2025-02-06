import { useContext } from "react"
import ProductTable from "../../components/organisms/tables/ProductTable"
import { ProductContext } from "../../context/ProductContext/ProductContext"
import RedirectButton from "../../components/atoms/buttons/RedirectButton";

function AdminProductList() {
    const { products, loading, error } = useContext(ProductContext);

    if (loading) return <div>Loading products...</div>;
    if (error) {
        const eMsg = Array.isArray(error) ? error.join(", ") : error;
        return <div>Error: {eMsg}</div>
    }

  return (
    <main>
        <header className="p-5">
            <RedirectButton 
                to="/admin/crear-producto"
                className="rounded-xl"
            >
                Crear producto
            </RedirectButton>
        </header>
        <section className="p-5">
            <h2 className="text-3xl">Productos</h2>
            <ProductTable 
                products={ products }
            />
        </section>
    </main>
  )
}

export default AdminProductList