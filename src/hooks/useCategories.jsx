import { useState, useEffect } from "react";
import {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
} from "../services/CategoryService";

const useCategories = () => {
    const [categories, setCategories] = useState([]);

    const getAllCategoriesFromApiService = async () => {
        const data = await getAllCategories();
        setCategories(data);
    };

    const addCategory = async (newCategory) => {
        const creeatedCategory = await createCategory(newCategory);
        setCategories((prevCategories) => [...prevCategory, creeatedCategory]);
    };

    const updatedCategoryById = async (id, updatedCategory) => {
        const updated = await updateCategory(id, updatedCategory);
        setCategories((prevCategories) => 
            prevCategories.map((category) => (category.id === id ? updated : category))
        );
    };

    const deleteCategoryById = async (id) => {
        await deleteCategory(id);
        setCategories((prevCategories) => prevCategories.filter((category) => category.id !== id));
    };

    useEffect(() => {
        getAllCategoriesFromApiService();
    }, []);

    return{
        categories,
        addCategory,
        updatedCategoryById,
        deleteCategoryById
    };
};

export default useCategories;