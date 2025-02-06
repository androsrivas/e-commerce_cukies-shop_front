import { useContext, useEffect } from "react";
import CategoryTable from "../../components/organisms/tables/CategoryTable";
import { CategoryContext } from "../../context/CategoryContext/CategoryContext";
import RedirectButton from "../../components/atoms/buttons/RedirectButton";

function AdminCategoryList() {
    const { categories, loading, error, fetchCategories } = useContext(CategoryContext);

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

    if (loading) return <div>Loading categories...</div>;
    if (error) {
        const eMsg = Array.isArray(error) ? error.join(", ") : error;
        return <div>Error: {eMsg}</div>;
    }

    return (
        <main>
            <header className="p-5">
                <RedirectButton 
                    to="/admin/crear-categoria"
                    className="rounded-xl"
                >
                    Crear categoría
                </RedirectButton>
            </header>
            <div>
                <h2 className="text-3xl">Categorías</h2>
                <CategoryTable
                    categories={ categories } 
                />
            </div>
        </main>
    )

}

export default AdminCategoryList;