import { CategoryContext } from "./CategoryContext";
import useCategories from "../../hooks/useCategories";

const CategoryProvider = ({ children }) => {
    const contextValue = useCategories();

    return(
        <CategoryContext.Provider value={ contextValue }>
            { children }
        </CategoryContext.Provider>
    )
};

export default CategoryProvider;