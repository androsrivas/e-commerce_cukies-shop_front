import * as yup from "yup";

const categorySchema = yup.object().shape({
  name: yup.string().required("Indique un nombre para el producto.").label("Nombre"),
});

export default categorySchema;