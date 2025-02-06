import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import { stringToUpperCase } from "../../../utils/utils";
import DeleteButton from "../../atoms/buttons/DeleteButton";
import DeleteCategoryModal from "../../atoms/modals/DeleteCategoryModal";

function CategoryTable({ categories, deleteCategoryById }) {
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [selectedCategoryName, setSelectedCategoryName] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (categoryId, categoryName) => {
        setSelectedCategoryId(categoryId);
        setSelectedCategoryName(categoryName);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCategoryId(null);
    }

    return (
        <>
            <Table>
                <TableCaption>Tu lista de categorias</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Acciones</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {categories.map((category) => (
                        <TableRow key={ category.id }>
                            <TableCell>{ category.id }</TableCell>
                            <TableCell>{ stringToUpperCase(category.name) }</TableCell>
                            <TableCell className="flex gap-2">
                                <Button className="rounded-xl">Ver detalles</Button>
                                <Button className="rounded-xl">Editar</Button>
                                <DeleteButton onClick={() => openModal(category.id, stringToUpperCase(category.name))}/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <DeleteCategoryModal 
                isOpen={isModalOpen}
                onClose={closeModal}
                categoryId={selectedCategoryId}
                categoryName={selectedCategoryName}
                deleteCategoryById={deleteCategoryById}
            />
        </>
    );
}

export default CategoryTable;

