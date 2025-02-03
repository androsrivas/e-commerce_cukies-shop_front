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

function ProductTable({ products }) {
    return (
        <Table>
            <TableCaption>Tu lista de productos</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Precio</TableHead>
                    <TableHead>Disponible</TableHead>
                    <TableHead>Acciones</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody> 
                {Array.isArray(products) && products.length > 0 ? (
                    products.map((product) => (
                        <TableRow key={ product.id }>    
                            <TableCell>{ product.id }</TableCell>
                            <TableCell>{ product.name }</TableCell>
                            <TableCell>{ product.price }</TableCell>
                            <TableCell>{ product.featured }</TableCell>
                            <TableCell className="flex gap-2">
                                <Button className="rounded-xl">Ver detalle</Button>
                                <Button className="rounded-xl">Editar</Button>
                                <Button className="rounded-xl">Eliminar</Button>
                            </TableCell>
                        </TableRow>
                    ))
                ) : (
                    <TableRow>
                        <TableCell colSpan={ 5 }>Error loading products.</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}

export default ProductTable;