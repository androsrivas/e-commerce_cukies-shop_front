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
        <CardContent className="flex-col gap-5">
            <CardTitle className="text-xl">{ product.name }</CardTitle>
            <CardDescription className="flex justify-between">
              <p>{ product.categoryName }</p>
              <h3 className="text-lg">{ product.price }</h3>
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