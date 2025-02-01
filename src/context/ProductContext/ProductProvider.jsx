    import { ProductContext } from "./ProductContext";
    import useProducts from "../../hooks/api/useProducts";

    const ProductProvider = ({ children }) => {
        const { products, setProducts } = useProducts();

        return(
            <ProductContext.Provider value={{ products, setProducts }}>
                { children }
            </ProductContext.Provider>
        );
    };

    export default ProductProvider;