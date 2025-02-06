import { useContext, useEffect } from "react";
import CategoryTable from "../../components/organisms/tables/CategoryTable";
import { CategoryContext } from "../../context/CategoryContext/CategoryContext";

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
                breadcrumb
            </header>
            <div>
                <CategoryTable
                    categories={ categories } 
                />
            </div>
        </main>
    )

}

export default AdminCategoryList;