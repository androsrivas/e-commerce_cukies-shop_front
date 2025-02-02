import { useApiCall } from "./useApiCall";
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../../services/ProductService";
import { useEffect } from "react";

const useProductService = () => {
    const { data: products, loading, errors, statusCode, fetchData } = useApiCall();

    const fetchAllProducts = () => {
        fetchData(getAllProducts);
    };

    const fetchProductById = (id) => {
        fetchData(getProductById, id);
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

    useEffect(() => {
        fetchAllProducts();
    }, []);

    return {
        products,
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

export default useProductService;
