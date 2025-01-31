import axios from "axios";

const url = "http://localhost:8080/api/products";

const getAllProducts = async () => {
    const response = await axios.get(url);
    return response.data;
}

const getProductById = async(id) => {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
}

const createProduct = async(newProduct) => {
    const response = await axios.post(url, newProduct);
    return response.data;
}

const updateProduct = async (id, updateProduct) => {
    const response = await axios.put(`${url}/${id}`, updateProduct);
    return response.data;
}

const deleteProduct = async (id) => {
    const response = await axios.delete(`${url}/${id}`);
    return response.data;
}

export {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};