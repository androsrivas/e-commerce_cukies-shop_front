import { useApiCall } from "./useApiCall";
import { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } from "../../services/CategoryService";

export const useCategoryService = () => {
    const { data, loading, errors, statusCode, fetchData } = useApiCall();

    const fetchAllCategories = () => {
        fetchData(getAllCategories);
    };

    const fetchCategoryById = (id) => {
        fetchData(getCategoryById, id);
    };

    const addCategory = (newCtaegory) => {
        fetchData(createCategory, newCtaegory);
    };

    const modifyCategory = (id, updatedCategory) => {
        fetchData(updateCategory, id, updateCategory);
    };

    const removeCategory = (id) => {
        fetchData(deleteCategory, id);
    };

    return {
        data,
        loading,
        errors,
        statusCode,
        fetchAllCategories,
        fetchCategoryById,
        addCategory,
        modifyCategory,
        removeCategory
    };
}