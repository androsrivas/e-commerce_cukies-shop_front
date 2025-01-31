import axios from "axios";

const url = "http://localhost:8080/api/categories";

const getAllCategories = async () => {
    const response = await axios.get(url);
    return response.data;
}

const getCategoryById = async(id) => {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
}

const createCategory = async(newCategory) => {
    const response = await axios.post(url, newCategory);
    return response.data;
}

const updateCategory = async (id, updateCategory) => {
    const response = await axios.put(`${url}/${id}`, updateCategory);
    return response.data;
}

const deleteCategory = async (id) => {
    const response = await axios.delete(`${url}/${id}`);
    return response.data;
}

export {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
};