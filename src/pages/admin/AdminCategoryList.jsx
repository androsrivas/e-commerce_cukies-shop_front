import { useContext } from "react";
import CategoryTable from "../../components/organisms/tables/CategoryTable";
import { CategoryContext } from "../../context/CategoryContext/CategoryContext";

function AdminCategoryList() {
    const { categories, loading, errors } = useContext(CategoryContext);
    console.log(categories)

    if (loading) return <div>Loading categories...</div>;
    if (errors?.length) return <div>Error: {errors.join(", ")}</div>;

    return (
        <main>
            <div>
                <CategoryTable
                    categories={ categories } 
                />
            </div>
        </main>
    )

}

export default AdminCategoryList;