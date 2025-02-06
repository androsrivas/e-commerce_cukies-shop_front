import { ProductContext } from "./ProductContext";
import useProducts from "../../hooks/useProducts";

const ProductProvider = ({ children }) => {
    const contextValue = useProducts();

    return(
        <ProductContext.Provider value={ contextValue }>
            { children }
        </ProductContext.Provider>
    );
};

export default ProductProvider;