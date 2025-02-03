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
import { Checkbox } from "@/components/ui/checkbox";
import FormButton from "../../atoms/buttons/FormButton";
import * as yup from "yup";
import { ProductContext } from "../../../context/ProductContext/ProductContext";
import { yupResolver } from "@hookform/resolvers/yup";
import CategorySelect from "../../atoms/CategorySelect";

const schema = yup.object().shape({
  name: yup.string().required("Indique un nombre para el producto.").label("Nombre"),
  price: yup
    .number()
    .typeError("El precio debe ser un número.")
    .positive("El precio debe ser un número positivo.")
    .required("Indique el precio para el producto.")
    .label("Precio"),
  description: yup.string().label("Descripción"),
  imageUrl: yup.string().url("Indique una URL válida.").label("Imagen"),
  categoryName: yup.string().label("Categoría"),
  featured: yup.boolean().label("Disponible"),
});

const ProductForm = () =>  {
  const { createProduct } = useContext(ProductContext);
  const [ isSubmitting, setIsSubmitting ] = useState(false);
  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      price: 0.00,
      description: "",
      imageUrl: "",
      categoryName: "",
      featured: false
    },
  });

  const onSubmit = async (values) => {
    setIsSubmitting(true);
    try {
      await createProduct(values);
      form.reset();
      alert("Producto creado correctamente.");
    } catch (error) {
      console.error("Error al crear el producto: ", error);
      alert("Error al crear el producto.");
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
                <Input placeholder="Nombre del producto" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField 
          name="price"
          control={ form.control }
          render={(field) => (
            <FormItem>
          <FormLabel>Precio</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Precio" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
          )}
        />
          

        <FormField 
          name="description"
          control={ form.control }
          render={({field}) => (
            <FormItem>
            <FormLabel>Descripción</FormLabel>
              <FormControl>
                <Input placeholder="Descripción" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        
        
        <FormField 
          name="imageUrl"
          control={ form.control }
          render={({field}) => (
            <FormItem>
            <FormLabel>Imagen</FormLabel>
              <FormControl>
                <Input type="url" placeholder="Enlace de imagen" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        

        <FormField 
          name="categoryName"
          control={ form.control }
          render={({field}) => (
            <FormItem>
            <FormLabel>Categoría</FormLabel>
            <FormControl>
              <CategorySelect {...field} />
            </FormControl>
          </FormItem>
          )}
        />
            

        <FormField 
          name="featured"
          control={ form.control }
          render={({field}) => (
            <FormItem>
            <FormLabel>Disponible</FormLabel>
              <FormControl>
                <Checkbox {...field} id="featured" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormButton submit={ onSubmit } text="Crear"/>
      </form>
    </Form>
  )
}

export default ProductForm;