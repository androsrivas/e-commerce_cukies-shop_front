import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProductContext } from "../context/ProductContext/ProductContext";
import productSchema from "../schemas/productSchema";

const useProductForm = () => {
    const { addProduct } = useContext(ProductContext);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useForm({
        resolver: yupResolver(productSchema),
        defaultValues: {
            name: "",
            price: 0,
            description: "",
            imageUrl: "",
            categoryId: null,
            featured: false,
        },
    });

    const onSubmit = async (values) => {
        console.log("Values before submit: ", values);
        setIsSubmitting(true);
        try {
            const productData = {
                ...values,
                categoryId: values.categoryId
            };

            await addProduct(productData);
            form.reset();
            alert("Producto creado correctamente.");
        } catch (error) {
            console.error("Error al crear el producto: ", error);
            alert("Error al crear el producto.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return { form, onSubmit, isSubmitting };
};

export default useProductForm;