import { useState, useContext } from "react";
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
        { renderFormField("Descripción", "description", Input, { placeholder: "Escribe aquí una breve descripción..."}) }
        { renderFormField("Imagen", "imageUrl", Input, { type: "url", placeholder: "Enlace de imagen"}) }
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
        
        {renderFormField("Disponible", "featured", Checkbox, {
          id: "featured",
          checked: !!form.watch("featured"),
          onCheckedChange: form.setValue.bind(null, "featured")
        })}
        
        <FormButton text="Crear" isSubmitting={ isSubmitting }/>
      </form>
    </Form>
    </FormProvider>
  )
}

export default ProductForm;