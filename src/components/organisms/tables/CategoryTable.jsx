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

function CategoryTable({ categories }) {
    return (
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
                {Array.isArray(categories) && categories.length > 0 ? (
                    categories.map((category) => (
                        <TableRow key={ category.id }>
                            <TableCell>{ category.id }</TableCell>
                            <TableCell>{ stringToUpperCase(category.name) }</TableCell>
                            <TableCell className="flex gap-2">
                                <Button className="rounded-xl">Ver detalles</Button>
                                <Button className="rounded-xl">Editar</Button>
                                <Button className="rounded-xl">Eliminar</Button>
                            </TableCell>
                        </TableRow>
                    ))
                ) : (
                    <TableRow>
                        <TableCell>Error loading categories.</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}

export default CategoryTable;