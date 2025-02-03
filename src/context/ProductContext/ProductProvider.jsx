import { useEffect, useState, useMemo } from "react";
import { ProductContext } from "./ProductContext";
import { getAllProducts, createProduct } from "../../services/ProductService";

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getAllProducts();
                setProducts(data);
            } catch (error) {
                setErrors([error.message]);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();

    }, []);

    const addProduct = async (productData) => {
        setLoading(true);
        setErrors(null);

        try {
            const newProduct = await createProduct(productData);
            setProducts(prevProducts => [...(prevProducts || []), newProduct]);
            return newProduct;
        } catch (error) {
            console.error("Error añadiendo nuevo producto: ", error);
            setErrors([error.message]);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const contextValue = useMemo(() => ({
        products, 
        loading,
        errors,
        addProduct,
    }), [products, loading, errors, addProduct]);
    
    if (loading) return <div>Loading...</div>;
    if (errors?.length) return <div>Error: { errors.join(", ") }</div>;

    return(
        <ProductContext.Provider value={ contextValue }>
            { children }
        </ProductContext.Provider>
    );
};

export default ProductProvider;