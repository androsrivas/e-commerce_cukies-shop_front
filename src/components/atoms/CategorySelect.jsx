import { useContext } from "react";
import { CategoryContext } from "../../context/CategoryContext/CategoryContext";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

const CategorySelect = () => {
  const { categories } = useContext(CategoryContext);
    
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Selecciona una categoría"/>
      </SelectTrigger>
      <SelectContent>
        {categories.map((category) => (
          <SelectItem key={ category.id } value={ category.name }>
            { category.name }
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default CategorySelect