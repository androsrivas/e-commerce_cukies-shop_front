import { useEffect } from "react";
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
import useProductService from "../../hooks/api/useProductService";

const productSchema = yup.object({
    name: yup.string().required("El nombre es obligatorio."),
    price: yup.number().positive("El precio debe ser positivo.").required("El precio es obligatorio."),
    desription: yup.string().optional(),
    imageUrl: yup.string().url('Proporciona una URL válida.').optional(),
    categoryName: yup.string().optional(),
    featured: yup.boolean().optional()
});

const ProductForm = () =>  {
  const { addProduct, loading, errors } = useProductService();
  const onSubmit = (data) => {
    addProduct(data);
  };

  const { register, handleSubmit, errors: formErrors, reset } = useFormHandler(productSchema, {}, onSubmit);

  useEffect(() => {
    if (!loading && !errors.length) reset();
  }, [loading, errors, reset]);

  return (
    <Form onSubmit={ handleSubmit }>
      <FormItem>
        <FormLabel>Nombre</FormLabel>
        <FormControl>
          <Input placeholder="Nombre del producto" {...register('name')} />
        </FormControl>
        { formErrors.name && <FormMessage>{ formErrors.name.message }</FormMessage> }
      </FormItem>

      <FormItem>
      <FormLabel>Precio</FormLabel>
        <FormControl>
          <Input type="number" placeholder="Precio" {...register('price')} />
        </FormControl>
        { formErrors.price && <FormMessage>{ formErrors.price.message }</FormMessage> }
      </FormItem>

      <FormItem>
      <FormLabel>Descripción</FormLabel>
        <FormControl>
          <Input placeholder="Descripción" {...register('description')} />
        </FormControl>
      </FormItem>

      <FormItem>
      <FormLabel>Imagen</FormLabel>
        <FormControl>
          <Input type="url" placeholder="Enlace de imagen" {...register('imageUrl')} />
          { formErrors.imageUrl && <FormMessage>{ formErrors.imageUrl.message }</FormMessage> }
        </FormControl>
      </FormItem>



    </Form>
  )
}

export default ProductForm;