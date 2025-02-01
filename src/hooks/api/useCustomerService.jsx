import { useApiCall } from "./useApiCall";
import { getAllCustomers, getCustomertById, createCustomer, updateCustomer, deleteCustomer } from "../../services/CustomerService";

export const useCustomerService = () => {
    const { data, loading, errors, statusCode, fetchData } = useApiCall();

    const fetchAllCustomers = () => {
        fetchData(getAllCustomers);
    };

    const fetchCustomerById = (id) => {
        fetchData(getCustomerById);
    };

    const addCustomer = (newCustomer) => {
        fetchData(createCustomer, newCustomer);
    };

    const modifyCustomer = (id, updatedCustomer) => {
        fetchData(updateCustomer, id, updatedCustomer);
    };

    const removeCustomer = (id) => {
        fetchData(deleteCustomer, id);
    };

    return {
        data,
        loading,
        errors,
        statusCode,
        fetchAllCustomers,
        fetchCustomerById,
        addCustomer,
        modifyCustomer,
        removeCustomer
    };
}
