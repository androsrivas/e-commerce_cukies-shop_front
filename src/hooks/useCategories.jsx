import { useState, useCallback, useMemo, useEffect } from "react";
import categoryService from "../services/CategoryService";

const useCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCategories = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const fetchedCategories = await categoryService.getAllCategories();
            setCategories(fetchedCategories);
        } catch (e) {
            setError(e);
            console.error("Error fetching categories: ", e);
        } finally {
            setLoading(false);
        }
    }, []);  
          
    
    const addCategory = useCallback(async (newCategory) => {
        const tempId = newCategory.id || Date.now();
        const newCategoryWithTempId = {...newCategory, id: tempId };
        setCategories(prevCategories => [...prevCategories, newCategoryWithTempId]);

        try {
            const addedCategory = await categoryService.createCategory(newCategory);
            setCategories(prevCategories => prevCategories.map(category => category.id === tempId ? addedCategory : category));
        } catch (e) {
            setError(e);
            console.error("Error creating category: ", e);
            setCategories(prevCategories => prevCategories.filter(category => category.id !== tempId));
        }
    }, []);

    const updatedCategoryById = useCallback(async (id, updatedCategory) => {
        const previousCategories = [...categories];
        setCategories(prevCategories => prevCategories.map(category => category.id === id ? updatedCategory : category));

        try {
            await categoryService.updateCategory(id, updatedCategory);
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
            await categoryService.deleteCategory(id);
        } catch (e) {
            setError(e);
            console.error("Error deleting category: ", e);
            setCategories(previousCategories);
        }
    }, [categories]);

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

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