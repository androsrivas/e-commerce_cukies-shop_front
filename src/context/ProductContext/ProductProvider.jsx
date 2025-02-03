import { useEffect, useState, useMemo } from "react";
import { ProductContext } from "./ProductContext";
import { getAllProducts } from "../../services/ProductService";

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

    const contextValue = useMemo(() => ({
        products, 
        loading,
        errors,
    }), [products, loading, errors]);
    
    if (loading) return <div>Loading...</div>;
    if (errors?.length) return <div>Error: { errors.join(", ") }</div>;

    return(
        <ProductContext.Provider value={ contextValue }>
            { children }
        </ProductContext.Provider>
    );
};

export default ProductProvider;