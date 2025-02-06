import { useState, useCallback, useMemo, useEffect } from "react";
import productService from "../services/ProductService";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchProducts = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const fetchedProducts = await productService.getAllProducts();
            setProducts(fetchedProducts);
        } catch (e) {
            setError(e);
            console.error("Error fetching products: ", e);
        } finally {
            setLoading(false);
        }
    }, []);

    const addProduct = useCallback(async (newProduct) => {
        const tempId = newProduct.id || Date.now();
        const newProductWithTempId = {...newProduct, id: tempId };
        setProducts(prevProducts => [...prevProducts, newProductWithTempId]);

        try {
            const addedProduct = await productService.createProduct(newProduct);
            setProducts(prevProducts => prevProducts.map(product => product.id === tempId ? addedProduct : product));
        } catch (e) {
            setError(e);
            console.error("Error creating product: ", e);
            setProducts(prevProducts => prevProducts.filter(product => product.id !== tempId));
        }
    }, []);

    const updatedProductById = useCallback(async (id, updatedProduct) => {
        const previousProducts = [...products];
        setProducts(prevProducts => prevProducts.map(product => product.id === id ? updatedProduct : product));

        try {
            await productService.updateProduct(id, updatedProduct);
        } catch (e) {
            setError(e);
            console.error("Error updating product: ", e);
            setProducts(previousProducts);
        }
    }, [products]);

    const deleteProductById = useCallback(async (id) => {
        const previousProducts = [...products];
        setProducts(prevProducts => prevProducts.filter(product => product.id === id));

        try {
            await productService.deleteProduct(id);
        } catch (e) {
            setError(e);
            console.error("Error deleting product: ", e);
            setProducts(previousProducts);
        }
    }, [products]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const contextValue = useMemo(() => ({
        products,
        loading,
        error,
        fetchProducts,
        addProduct,
        updatedProductById,
        deleteProductById
    }), [products, loading, error, fetch, addProduct, updatedProductById, deleteProductById]);

    return contextValue;
};

export default useProducts;