import * as yup from "yup";
import useFormHandler from "../../hooks/form/useFormHandler";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useProduct } from "../../hooks/api/useProducts";

const productSchema = yup.object({
    name: yup.string().required("El nombre es obligatorio."),
    price: yup.number().positive("El precio debe ser positivo.").required("El precio es obligatorio."),
});

const ProductForm = () =>  {
    const defaultValues = { name: "", price: "" };

    const onSubmit = async (data) => {
        await addP
    }

    const { register, handleSubmit, errors } = useFormHandler(productSchema, defaultValues, onSubmit);

  return (
    <Form>

    </Form>
  )
}

export default ProductForm;