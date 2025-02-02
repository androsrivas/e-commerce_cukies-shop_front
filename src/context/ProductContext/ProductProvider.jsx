import { ProductContext } from "./ProductContext";
import useProductService from "../../hooks/api/useProductService";
import { useState, useEffect } from "react";

const ProductProvider = ({ children }) => {
    const { 
        products,
        loading,
        errors, 
        fetchAllProducts, 
        fetchProductById, 
        addProduct, 
        modifyProduct, 
        removeProduct 
    } = useProductService();
    const [ productList, setProductList ] = useState([]);

    useEffect(() => {
        fetchAllProducts();
    }, []);

    useEffect(() => {
        if (Array.isArray(products)) setProductList(products);
    }, [products]);

    return(
        <ProductContext.Provider value={{
            products,
            setProductList,
            loading,
            errors,
            fetchAllProducts,
            fetchProductById,
            addProduct,
            modifyProduct,
            removeProduct
        }}>
            { children }
        </ProductContext.Provider>
    );
};

export default ProductProvider;