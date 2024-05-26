import { Badge, Button, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { PiCreditCard as QuickShopIcon, PiShoppingCartDuotone as AddToCartIcon } from "react-icons/pi";

export const ProductCard = ({ id, name, shortDescription, description, image, price, tags }: Product) => {
  return (
    <Card key={id} className="w-full">
      <CardHeader>
        <div className="w-full flex flex-row justify-between items-start">
          {image ? (
            <Image src={image} alt={name} className="w-full max-w-1/2 h-48 object-cover" />
          ) : (
            <Image src={`https://picsum.photos/seed/${id}/800/300`} alt={name} className="w-full max-w-1/2 h-48 object-cover" />
          )}
          <div className="h-48 flex flex-col items-stretch justify-between gap-4">
            <div className="h-full flex items-center justify-center bg-gray-100 rounded-xl px-4 py-1 text-gray-900 text-2xl font-sans">₺{price}</div>
            <div className="flex flex-col gap-2">
              <Button className="flex items-center gap-2 bg-green-100 text-green-900">
                <AddToCartIcon className="flex-shrink-0 h-6 w-6 " />
                Sepete Ekle
              </Button>
              <Button className="flex items-center gap-2 bg-emerald-100 text-emerald-900">
                <QuickShopIcon className="flex-shrink-0 h-6 w-6" />
                Hızlı Satın Al
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-default-600">{shortDescription}</p>
      </CardBody>
    </Card>
  );
};
