import { useState, useEffect } from "react";
import { 
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../../services/ProductsService";

function useProducts() {
    const [ products, setProducts ] = useState([]);

    const fetchProductsFromAPI = async() => {
        const productsFromAPI = await getAllProducts();
        setProducts(productsFromAPI);
    }

    const fetchProductByIdFromAPI = async(id) => {
        const productByIdFromAPI = await getProductById(id);
        setProducts(productByIdFromAPI);
    }

    const addProductFromAPI = async(newProduct) => {
        const createProductFromAPI = await createProduct(newProduct);
        setProducts(createProductFromAPI);
    }

    useEffect(() => {
        fetchProductsFromAPI(),
        fetchProductByIdFromAPI(),
        addProductFromAPI()
    }, []);

    return { products, setProducts };
};

export default useProducts;