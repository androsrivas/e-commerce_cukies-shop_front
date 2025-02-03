import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import productSchema from "../../../schemas/productSchema";
import { createProduct } from "../../../services/ProductService";
import FormButton from "../../atoms/buttons/FormButton";

const ProductForm = () => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(null);

    const addProduct = async (productData) => {
        setLoading(true);
        setErrors(null);


        try {
            const newProduct = await createProduct(productData); 
            setProducts(prevProducts => [...(prevProducts || []), newProduct]);
            return newProduct;
        } catch (error) {
            console.error("Error afegint nou producte: ", error);
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

    const {
        register,
        handleSubmit,
        formState: { errors: formErrors },
        reset,
    } = useForm({
        resolver: yupResolver(productSchema),
    });

    const onSubmit = async (data) => {
        console.log("onSubmit called with: ", data);
        console.log("contextValue: ", contextValue);
        console.log("contextValue.addProduct:", contextValue.addProduct);
        try {
            await contextValue.addProduct(data); 
            console.log("Producte creat correctament!");
            reset();
        } catch (error) {
            console.error("Error al crear el producte:", error);
            setErrors([error.message]);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Crear producto:</h2>

            <div>
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" {...register("name")} />
                {formErrors.name && <p>{formErrors.name.message}</p>}
            </div>

            <div>
                <label htmlFor="price">Precio</label>
                <input type="number" id="price" {...register("price")} />
                {formErrors.price && <p>{formErrors.price.message}</p>}
            </div>

            <div>
                <label htmlFor="description">Descripción</label>
                <textarea id="description" {...register("description")} />
                {formErrors.description && <p>{formErrors.description.message}</p>}
            </div>

            <div>
                <label htmlFor="imageUrl">Imagen</label>
                <input type="url" id="imageUrl" {...register("imageUrl")} />
                {formErrors.imageUrl && <p>{formErrors.imageUrl.message}</p>}
            </div>

            <div>
                <label htmlFor="featured">Disponible</label>
                <input type="checkbox" id="featured" {...register("featured")} />
            </div>

            <FormButton type="submit" disabled={contextValue.loading} loading={contextValue.loading}>
                Enviar
            </FormButton>

            {/* {contextValue.loading && <p>Creant producte...</p>} */}
            {contextValue.errors && contextValue.errors.map((error) => <p key={error}>{error}</p>)}
        </form>
    );
};

export default ProductForm;