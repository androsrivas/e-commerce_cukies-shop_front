import { useApiCall } from "./useApiCall";
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../../services/ProductService";

export const useProductService = () => {
    const { data, loading, errors, statusCode, fetchData } = useApiCall();

    const fetchAllProducts = () => {
        fetchData(getAllProducts);
    };

    const fetchProductById = (id) => {
        fetchData(getProductById);
    };

    const addProduct = (newProduct) => {
        fetchData(createProduct, newProduct);
    };

    const modifyProduct = (id, updatedProduct) => {
        fetchData(updateProduct, id, updatedProduct);
    };

    const removeProduct = (id) => {
        fetchData(deleteProduct, id);
    };

    return {
        data,
        loading,
        errors,
        statusCode,
        fetchAllProducts,
        fetchProductById,
        addProduct,
        modifyProduct,
        removeProduct
    };
}
