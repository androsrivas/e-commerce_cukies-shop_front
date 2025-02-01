import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function ProductCard({ product }) {
  return (
    <Card>
        <CardHeader>
            <img src={ product.imageUrl } alt={ product.name }/>
        </CardHeader>
        <CardContent>
            <CardTitle>{ product.name }</CardTitle>
            <CardDescription>
              { product.price }
              { product.category }
            </CardDescription>
        </CardContent>
        <CardFooter className="flex justify-center gap-5">
          <Button to="" className="rounded-xl">Ver detalles</Button>
          <Button className="rounded-xl">Añadir al carrito</Button>
        </CardFooter>
    </Card>
  )
}

export default ProductCard