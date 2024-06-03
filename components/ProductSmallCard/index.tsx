import { fakeProducts } from "@/data/product";
import { Card, Image } from "@nextui-org/react";
import router from "next/router";

type Props = {
  product: Product;
  onClick: () => void;
  className?: string;
};

export const ProductSmallCard = ({ product, onClick, className }: Props) => {
  return (
    <Card className={`flex flex-col gap-2 ${className}`} shadow="none" isHoverable isPressable onClick={onClick}>
      <Image isZoomed alt={product.name} className="w-full h-full aspect-square object-cover rounded-xl" src={product.images[0]} />
      <div className="flex flex-col items-start gap-1 px-4 pt-2 pb-4 rounded-b-xl">
        <h3 className="font-poppins font-semibold text-gray-800 text-lg">{product.name}</h3>
        <p className="font-poppins font-normal text-gray-600 text-md">{product.price} ₺</p>
      </div>
    </Card>
  );
};
