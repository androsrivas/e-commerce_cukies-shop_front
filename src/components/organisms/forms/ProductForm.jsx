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
import { Checkbox } from "@/components/ui/checkbox";
import FormButton from "../../atoms/buttons/FormButton";
import { ProductContext } from "../../../context/ProductContext/ProductContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { CategoryContext } from "../../../context/CategoryContext/CategoryContext";
import productSchema from "../../../schemas/productSchema";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

const ProductForm = () =>  {
  const { addProduct } = useContext(ProductContext);
  const { categories } = useContext(CategoryContext);
  const [ isSubmitting, setIsSubmitting ] = useState(false);
  const form = useForm({
    resolver: yupResolver(productSchema),
    defaultValues: {
      name: "",
      price: 0,
      description: "",
      imageUrl: "",
      categoryId: "Selecciona una categoría",
      featured: false
    },
  });

  const onSubmit = async (values) => {
    setIsSubmitting(true);
    try {
      const productData = {
        ...values,
        categoryId: values.categoryId,
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
  }

  return (
    <FormProvider>
    <Form {...form}>
      <form onSubmit={ form.handleSubmit(onSubmit) }>
        <FormField
          name="name"
          control={ form.control }
          render={({ field }) => (
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
          render={({ field }) => (
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
          render={({ field }) => (
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
          render={({ field }) => (
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
          name="categoryId"
          control={ form.control }
          render={({ field }) => (
            <FormItem>
            <FormLabel>Categoría</FormLabel>
            <FormControl>
              <Select onValueChange={ field.onChange } defaultValue={ field.value }>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una categoría"/>
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={ category.id } value={ category.id }>
                      { category.name }
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
          </FormItem>
          )}
        />
            

        <FormField 
          name="featured"
          control={ form.control }
          render={({ field }) => (
            <FormItem>
            <FormLabel>Disponible</FormLabel>
              <FormControl>
                <Checkbox 
                  id="featured" 
                  checked={ !!field.value }
                  onCheckedChange={ field.onChange }
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormButton text="Crear" isSubmitting={ isSubmitting }/>
      </form>
    </Form>
    </FormProvider>
  )
}

export default ProductForm;