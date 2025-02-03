import { useState, useEffect, useMemo } from "react";
import { CategoryContext } from "./CategoryContext";
import { getAllCategories } from "../../services/CategoryService";

const CategoryProvider = ({ children }) => {
    const [categories, setCategories] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getAllCategories();
                setCategories(data);
            } catch (error) {
                setErrors([error.message]);
            } finally {
                setLoading(false);
            }
        };
        fetchCategories();

    }, []);

    const contextValue = useMemo(() => ({
        categories,
        loading,
        errors,
    }), [categories, loading, errors]);

    if (loading) return <div>Loading...</div>;
    if (errors?.length) return <div>Error: { errors.join(", ") }</div>;

    if (Array.isArray(categories) && categories.length === 0) {
        return <div>No categories found.</div>;
    }

    return(
        <CategoryContext.Provider value={ contextValue }>
            { children }
        </CategoryContext.Provider>
    )
};

export default CategoryProvider;