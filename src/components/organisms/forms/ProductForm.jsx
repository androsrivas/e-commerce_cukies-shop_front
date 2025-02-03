import { useContext } from "react";
import { FormProvider } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import FormButton from "../../atoms/buttons/FormButton";
import { CategoryContext } from "../../../context/CategoryContext/CategoryContext";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import useProductForm from "../../../hooks/useProductForm";
import { stringToUpperCase } from "../../../utils/utils";

const ProductForm = () =>  {
  const { categories } = useContext(CategoryContext);
  const { form, onSubmit, isSubmitting } = useProductForm();

  const renderFormField = (label, name, Component, props = {}) => (
    <FormField 
      name={ name }
      control={ form.control }
      render={({ field }) => (
        <FormItem>
          <FormLabel>{ label }</FormLabel>
          <FormControl>
            <Component {...field} {...props} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  return (
    <FormProvider>
    <Form {...form}>
      <form onSubmit={ form.handleSubmit(onSubmit) }>
        { renderFormField("Nombre", "name", Input, { placeholder: "Nombre del producto" }) }
        { renderFormField("Precio", "price", Input, { type: "number", placeholder: "Precio"}) }
        { renderFormField("Descripción", "description", Textarea, { placeholder: "Escribe una breve descripción..."}) }
        { renderFormField("Imagen", "imageUrl", Input, { type: "url", placeholder: "Enlace de imagen"}) }

        <FormField 
          name="categoryId"
          control={ form.control }
          render={({ field }) => (
            <FormItem>
            <FormLabel>Categoría</FormLabel>
            <FormControl>
              <Select 
                value={ field.value || "-1" } 
                onValueChange={(value) => field.onChange(Number(value))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una categoría"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="-1" disabled>Selecciona una categoría</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={ category.id } value={ category.id }>
                      { stringToUpperCase(category.name) }
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
          </FormItem>
          )}
        />
        
        {renderFormField("Disponible", "featured", Checkbox, {
          id: "featured",
          checked: !!form.watch("featured"),
          onCheckedChange: (checked) => form.setValue("featured", checked)
        })}

        <FormButton text="Crear" isSubmitting={ isSubmitting }/>
      </form>
    </Form>
    </FormProvider>
  )
}

export default ProductForm;