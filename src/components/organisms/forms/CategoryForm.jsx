import { useState, useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FormButton from "../../atoms/buttons/FormButton";
import { yupResolver } from "@hookform/resolvers/yup";
import categorySchema from "../../../schemas/categorySchema";
import { CategoryContext } from "../../../context/CategoryContext/CategoryContext";

const CategoryForm = () => {
    const { addCategory } = useContext(CategoryContext);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useForm({
        resolver: yupResolver(categorySchema),
        defaultValues: {
            name: ""
        },
    });
    
    const onSubmit = async (values) => {
        setIsSubmitting(true);
        try {
            await addCategory(values);
            form.reset();
            alert("Categoría creada correctamente.");
        } catch (error) {
            console.error("Error al crear la categoría.");
            alert("Error al crear la categoría");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <FormProvider>
        <Form {...form}>
            <form onSubmit={ form.handleSubmit(onSubmit) }>
                <FormField 
                    name="name"
                    control={ form.control }
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Nombre</FormLabel>
                            <FormControl>
                                <Input placeholder="Nombre de la categoría" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormButton text="Añadir" isSubmitting={ isSubmitting } />
            </form>
        </Form>
        </FormProvider>
    )
};

export default CategoryForm;