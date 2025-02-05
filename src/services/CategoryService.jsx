import axios from "axios";

const API_URL = process.env.CUKIES_SHOP_APP_API_URL_CATEGORIES; 

const categoryService = {
    getAllCategories: async () => {
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            console.error("Error fetching categories: ", error);
            throw error;
        }
    },

    getCategoryById: async (id) => {
        try {
            const response = await axios.get(`${API_URL}/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching category: ", error);
            throw error;
        }
    },

    createCategory: async (newCategory) => {
        try {
            const response = await axios.post(API_URL, newCategory);
            return response.data;
        } catch (error) {
            console.error("Error creating new category: ", error);
            throw error;
        }
    },

    updateCategory: async (id, updatedCategory) => {
        try {
            const response = await axios.put(`${API_URL}/${id}`, updatedCategory);
            return response.data;
        } catch (error) {
            console.error("Error updating category: ", error);
            throw error;
        }
    },

    deleteCategory: async (id) => {
        try {
            const response = await axios.delete(`${API_URL}/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error deleting category: ", error);
            throw error;
        }
    },
}

export default categoryService;