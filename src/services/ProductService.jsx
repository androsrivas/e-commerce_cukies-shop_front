import axios from "axios";

const url = "http://localhost:8080/api/products";

const getAllProducts = async () => {
    const response = await axios.get(url);
    return response.data;
};

const getProductById = async(id) => {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
};

const createProduct = async(newProduct) => {
    console.log("createProduct called with: ", newProduct);
    try {
        const response = await axios.post(url, newProduct);
        console.log("Resposta de l'API: ", response);
        console.log("Dades retornades: ", response.data);
        return response.data;
    } catch (error) {
        console.error("Error en la llamada a la API: ", error);
        if (error.response) {
            console.error("Detalls de l'error: ", error.response.data);
        }
        throw error;
    }
};

const updateProduct = async (id, updatedProduct) => {
    const response = await axios.put(`${url}/${id}`, updatedProduct);
    return response.data;
};

const deleteProduct = async (id) => {
    const response = await axios.delete(`${url}/${id}`);
    return response.data;
};

export {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};