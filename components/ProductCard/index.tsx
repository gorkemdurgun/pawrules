import { Badge, Button, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { PiShoppingBagOpenDuotone as QuickBuyIcon, PiShoppingCartDuotone as AddToCartIcon } from "react-icons/pi";

type Props = {
  className?: string;
  product: Product;
};

export const ProductCard = ({ className, product }: Props) => {
  const { id, name, shortDescription, price, image } = product;

  return (
    <Card key={id} 
    shadow="none"
    className={className ? className : "w-full"}>
      <CardHeader>
        <div className="w-full flex flex-col justify-between items-center gap-4 bg-gray-50">
          {image ? (
            <Image src={image} alt={name} className="w-full h-48 object-cover" />
          ) : (
            <Image src={`https://picsum.photos/seed/${id}/800/300`} alt={name} className="w-full h-48 object-cover" />
          )}
        </div>
      </CardHeader>
      <CardBody>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-default-600">{shortDescription}</p>
      </CardBody>
      <CardFooter>
        <div className="w-full flex flex-col items-stretch justify-between gap-4">
          <div className="h-full flex items-center justify-center bg-gray-50 rounded-xl px-4 py-1 text-gray-900 text-2xl font-poppins font-bold">
            ₺{price}
          </div>
          <div className="flex flex-col gap-2">
            <Button className="flex items-center gap-2 bg-red-50 text-red-900">
              <AddToCartIcon className="flex-shrink-0 h-6 w-6 " />
              Sepete Ekle
            </Button>
            <Button className="flex items-center gap-2 bg-red-50 text-red-900">
              <QuickBuyIcon className="flex-shrink-0 h-6 w-6" />
              Hızlı Satın Al
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
