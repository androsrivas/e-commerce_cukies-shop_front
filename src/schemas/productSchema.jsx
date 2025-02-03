import * as yup from "yup";

const productSchema = yup.object().shape({
  name: yup.string().required("Indique un nombre para el producto.").label("Nombre"),
  price: yup
    .number()
    .typeError("El precio debe ser un número.")
    .positive("El precio debe ser un número positivo.")
    .required("Indique el precio para el producto.")
    .label("Precio"),
  description: yup.string().label("Descripción"),
  imageUrl: yup.string().url("Indique una URL válida.").label("Imagen"),
  categoryId: yup.number().required("Selecciona una categoría").label("Categoría"),
  featured: yup.boolean().label("Disponible"),
});

export default productSchema;