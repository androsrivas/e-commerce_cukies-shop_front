import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
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
import * as yup from "yup";
import { CategoryContext } from "../../../context/CategoryContext/CategoryContext";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    name: yup.string().required("Indique un nombre para la categoría.").label("Nombre"),
});

const CategoryForm = () => {
    const { createCategory } = useContext(CategoryContext);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: ""
        },
    });
    
    const onSubmit = async (values) => {
        setIsSubmitting(true);
        try {
            await createCategory(values);
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
                <FormButton submit={ onSubmit } text="Crear" />
            </form>
        </Form>
    )
};

export default CategoryForm;