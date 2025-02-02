import { useState } from "react";
import useFormHandler from "../../hooks/form/useFormHandler";
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
import FormButton from "../atoms/buttons/FormButton";
import { createProduct } from "../../services/ProductService";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Indique un nombre para el producto.").label("Nombre"),
  price: yup
    .number()
    .typeError("El precio debe ser un número.")
    .positive("El precio debe ser un número positivo.")
    .required("Indique el precio para el producto.").label("Precio"),
  description: yup.string().label("Descripción"),
  imageUrl: yup.string().url("Indique una URL válida.").label("Imagen"),
  categoryName: yup.string().label("Categoría"),
  featured: yup.boolean().label("Disponible"),
  comments: yup.string().label("Comentarios")
});

const ProductForm = () =>  {
  const [loading, setLoading] = useState(false);

  const { fields, handleSubmit, reset } = useFormHandler(schema, async(data) => {
    setLoading(true);
    
    try {
      await createProduct(data);
      alert("Producto creado correctamente.");
      reset();
    } catch (error) {
      console.error("Error al crear producto: ", error);
      alert("Error al crear producto.");
    } finally {
      setLoading(false);
    }
  });

  return (
    <Form onSubmit={ handleSubmit }>
      <FormField>
        <FormItem>
          <FormLabel>Nombre</FormLabel>
          <FormControl>
            <Input placeholder="Nombre del producto" {...fields.name.register} />
          </FormControl>
          { fields.name.error && <FormMessage>{ fields.name.error.message }</FormMessage> }
        </FormItem>
      </FormField>

      <FormField>
        <FormItem>
        <FormLabel>Precio</FormLabel>
          <FormControl>
            <Input type="number" placeholder="Precio" {...fields.price.register} />
          </FormControl>
          { fields.price.error && <FormMessage>{ fields.price.error.message }</FormMessage> }
        </FormItem>
      </FormField>

      <FormField>
        <FormItem>
        <FormLabel>Descripción</FormLabel>
          <FormControl>
            <Input placeholder="Descripción" {...fields.description.register} />
          </FormControl>
        </FormItem>
      </FormField>
      
      <FormField>
        <FormItem>
        <FormLabel>Imagen</FormLabel>
          <FormControl>
            <Input type="url" placeholder="Enlace de imagen" {...fields.imageUrl.register} />
          </FormControl>
            { fields.imageUrl.error && <FormMessage>{ fields.imageUrl.error.message }</FormMessage> }
        </FormItem>
      </FormField>

      <FormField>
        <FormItem>
        <FormLabel>Categoría</FormLabel>
          <FormControl>
            <Input placeholder="Categoría" {...fields.categoryName.register} />
            {/* { fields.categoryName.error && <FormMessage>{ fields.categoryName.error.message }</FormMessage> } */}
          </FormControl>
        </FormItem>
      </FormField>

      <FormField>
        <FormItem>
        <FormLabel>Disponible</FormLabel>
          <FormControl>
            <Checkbox {...fields.featured.register} id="featured" />
          </FormControl>
        </FormItem>
      </FormField>

      <FormField>
        <FormItem>
          <FormControl>
            <FormButton disabled={ loading } loading={ loading }>
              Crear
            </FormButton>
          </FormControl>
        </FormItem>
      </FormField>



    </Form>
  )
}

export default ProductForm;