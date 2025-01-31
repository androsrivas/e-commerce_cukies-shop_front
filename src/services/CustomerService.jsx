import axios from "axios";

const url = "http://localhost:8080/api/customers";

const getAllCustomers = async () => {
    const response = await axios.get(url);
    return response.data;
}

const getCustomerById = async(id) => {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
}

const createCustomer = async(newCustomer) => {
    const response = await axios.post(url, newCustomer);
    return response.data;
}

const updateCustomer = async (id, updateCustomer) => {
    const response = await axios.put(`${url}/${id}`, updateCustomer);
    return response.data;
}

const deleteCustomer = async (id) => {
    const response = await axios.delete(`${url}/${id}`);
    return response.data;
}

export {
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer
};