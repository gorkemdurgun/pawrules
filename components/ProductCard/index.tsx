import { Badge, Button, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { PiShoppingBagOpenDuotone as QuickBuyIcon, PiShoppingCartDuotone as AddToCartIcon } from "react-icons/pi";

type Props = {
  className?: string;
  product: Product;
};

export const ProductCard = ({ className, product }: Props) => {
  const { id, name, shortDescription, price, images } = product;

  const router = useRouter();

  return (
    <Card
      key={id}
      isPressable
      shadow="none"
      className={className ? className : "w-full"}
      onPress={() => {
        router.push(`/products/${id}`);
      }}
    >
      <CardHeader>
        <div className="w-full flex flex-col justify-between items-center gap-4 bg-gray-50">
          {images[0] ? (
            <Image isZoomed src={images[0]} alt={name} className="w-full h-48 object-cover" />
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
            <Button
              as={"a"}
              onClick={(e) => {
                console.log("Add to cart clicked");
              }}
              className="flex items-center gap-2 bg-red-50 text-red-900"
            >
              <AddToCartIcon className="flex-shrink-0 h-6 w-6 " />
              Sepete Ekle
            </Button>
            <Button
              as={"a"}
              onClick={(e) => {
                console.log("Quick buy clicked");
              }}
              className="flex items-center gap-2 bg-red-50 text-red-900"
            >
              <QuickBuyIcon className="flex-shrink-0 h-6 w-6" />
              Hızlı Satın Al
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
