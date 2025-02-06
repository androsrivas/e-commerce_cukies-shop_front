import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL; 

const categoryService = {
    getAllCategories: async () => {
        try {
            const response = await axios.get(`${API_URL}/categories`);
            return response.data;
        } catch (error) {
            console.error("Error fetching categories: ", error);
            throw error;
        }
    },

    getCategoryById: async (id) => {
        try {
            const response = await axios.get(`${API_URL}/categories/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching category: ", error);
            throw error;
        }
    },

    createCategory: async (newCategory) => {
        try {
            const response = await axios.post(`${API_URL}/categories`, newCategory);
            return response.data;
        } catch (error) {
            console.error("Error creating new category: ", error);
            throw error;
        }
    },

    updateCategory: async (id, updatedCategory) => {
        try {
            const response = await axios.put(`${API_URL}/categories/${id}`, updatedCategory);
            return response.data;
        } catch (error) {
            console.error("Error updating category: ", error);
            throw error;
        }
    },

    deleteCategory: async (id) => {
        try {
            const response = await axios.delete(`${API_URL}/categories/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error deleting category: ", error);
            throw error;
        }
    },
}

export default categoryService;