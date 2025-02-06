import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const productService = {
    getAllProducts: async () => {
        try {
            const response = await axios.get(`${API_URL}/products`);
            return response.data;        
        } catch (error) {
            console.error("Error fetching products: ", error);
            throw error;
        }
    },

    getProductById: async (id) => {
        try {
            const response = await axios.get(`${API_URL}/products/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching product: ", error);
            throw error;
        }
    },

    createProduct: async (newProduct) => {
        try {
            const response = await axios.post(`${API_URL}/products`, newProduct);
            return response.data;
        } catch (error) {
            console.error("Error with API call: ", error);
            if (error.response) {
                console.error("Error details: ", error.response.data);
            }
            throw error;
        }
    },

    updateProduct: async (id, updatedProduct) => {
        try {
            const response = await axios.put(`${API_URL}/products/${id}`, updatedProduct);
            return response.data;
        } catch (error) {
            console.error("Error updating product", error);
            throw error;
        }
    },

    deleteProduct: async (id) => {
        try {
            const response = await axios.delete(`${API_URL}/products/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error deleting category: ", error);
            throw error;
        }
    },
}

export default productService;