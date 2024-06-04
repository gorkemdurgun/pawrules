import { fakeProducts } from "@/data/product";
import { Card, Image } from "@nextui-org/react";
import router from "next/router";
import React from "react";

import { PiEyeDuotone as ViewIcon } from "react-icons/pi";

type Props = {
  product: Product;
  onClick: () => void;
  className?: string;
};

export const ProductSmallCard = ({ product, onClick, className }: Props) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Card
      className={`relative flex flex-col gap-2 ${className}`}
      shadow="none"
      isHoverable
      isPressable
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full aspect-square overflow-hidden rounded-xl">
        <div
          className={`w-full h-full flex flex-col items-center justify-center z-10 absolute  ${isHovered ? "opacity-100" : "opacity-0"} bg-gray-900/40 transition-opacity duration-300 text-white font-poppins font-semibold text-lg rounded-xl`}
        >
          Detayını Gör
          <ViewIcon className="w-12 h-12" />
        </div>
        <Image isZoomed alt={product.name} className="z-6 w-full h-full aspect-square object-cover rounded-xl" src={product.images[0]} />
      </div>
      <div className="flex flex-col items-start gap-1 px-4 pt-2 pb-4 rounded-b-xl">
        <h3 className="font-poppins font-semibold text-gray-800 text-lg">{product.name}</h3>
        <p className="font-poppins font-normal text-gray-600 text-md">{product.price} ₺</p>
      </div>
    </Card>
  );
};
