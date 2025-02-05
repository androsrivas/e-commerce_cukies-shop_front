import { useState, useCallback, useMemo } from "react";
import categortService from "../services/CategoryService";

const useCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCategories = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const fetchedCategories = await categortService.getAllCategories();
            setCategories(fetchedCategories);
        } catch (e) {
            setError(e);
            console.error("Error fetching categories: ", e);
        } finally {
            setLoading(false);
        }
    }, []);        
    
    const addCategory = useCallback(async (newCategory) => {
        setCategories(prevCategories => [...prevCategories, newCategory]);

        try {
            const addedCategory = await categortService.createCategory(newCategory);
            setCategories(prevCategories => prevCategories.map(category => category === newCategory ? addedCategory : category));
        } catch (e) {
            setError(e);
            console.error("Error creating category: ", e);
        }
    }, []);

    const updatedCategoryById = useCallback(async (id, updatedCategory) => {
        const previousCategories = [...categories];
        setCategories(prevCategories => prevCatgories.map(category => category.id === id ? updatedCategory : category));

        try {
            await categortService.updateCategory(id, updatedCategory);
        } catch (e) {
            setError(e);
            console.error("Error updating category: ", e);
            setCategories(previousCategories);
        }
    }, [categories]);

    const deleteCategoryById = useCallback(async (id) => {
        const previousCategories = [...categories];
        setCategories(prevCategories => prevCategories.filter(category => category.id === id));

        try {
            await categortService.deleteCategory(id);
        } catch (e) {
            setError(e);
            console.error("Error deleting category: ", e);
            setCategories(previousCategories);
        }
    }, [categories]);

    const contextValue = useMemo(() => ({
        categories,
        loading,
        error,
        fetchCategories,
        addCategory,
        updatedCategoryById,
        deleteCategoryById
    }), [categories, loading, error, fetchCategories, addCategory, updatedCategoryById, deleteCategoryById]);

    return contextValue;
};

export default useCategories;