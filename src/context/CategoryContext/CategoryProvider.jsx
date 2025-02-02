import { useState, useEffect } from "react";
import useCategoryService from "../../hooks/api/useCategoryService";

const CategoryProvider = ({ children }) => {
    const {
        categories,
        loading,
        errors,
        fetchAllCategories,
        fetchCategoryById,
        addCategory,
        modifyCategory,
        removeCategory
    } = useCategoryService();
    const [ categoryList, setCategoryList ] = useState([]);

    useEffect(() => {
        fetchAllCategories();
    }, []);

    useEffect(() => {
        if (Array.isArray(categories)) setCategoryList(categories);
    }, [categories]);

    return(
        <CategoryContext.Provider value={{
            categories,
            setCategoryList,
            loading,
            errors,
            fetchAllCategories,
            fetchCategoryById,
            addCategory,
            modifyCategory,
            removeCategory
        }}>
            { children }
        </CategoryContext.Provider>
    )
};

export default CategoryProvider;