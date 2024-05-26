import { Card, CardBody, Image } from "@nextui-org/react";
import { Button, Code } from "@nextui-org/react";
import {
  PiCursorClickDuotone as Click,
  PiCurrencyCircleDollarDuotone as Money,
  PiVirusDuotone as VirusIcon,
  PiSparkleDuotone as StarIcon,
  PiTruckDuotone as CarIcon,
  PiPhoneCallDuotone as PhoneIcon,
  PiArrowRight as SeeAllIcon,
  PiShoppingCartDuotone as AddToCartIcon,
  PiHeartDuotone as FavoriteIcon,
  PiEyeDuotone as ViewIcon,
} from "react-icons/pi";
import { motion } from "framer-motion";

type ProductWideCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  tags: string[];
};

export const ProductWideCard = ({ id, title, description, image, price, tags }: ProductWideCardProps) => {
  return (
    <Card shadow="none">
      <CardBody>
        <div className="flex flex-col md:grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <motion.div
            className="relative col-span-6 md:col-span-4"
            transition={{ delay: 0.5 }}
            initial={{
              x: -100,
            }}
            whileInView={{ x: 0 }}
          >
            {image && (
              <Image
                alt="Thumbnail"
                className="object-cover transition-transform duration-300 ease-in-out"
                width="100%"
                height="100%"
                src={image}
              />
            )}
          </motion.div>

          <div className="h-full flex flex-col items-start justify-center gap-2 col-span-4 md:col-span-5">
            <h3 className="font-reddit font-semibold text-foreground/90 text-3xl">{title}</h3>
            <p className="hidden md:flex text-justify text-small text-foreground/80">{description}</p>
            <div className="hidden md:flex flex-wrap items-center justify-start gap-2 mt-4">
              {tags.map((tag) => (
                <Code key={tag} className="bg-gray-100 text-gray-500">
                  #{tag}
                </Code>
              ))}
            </div>
          </div>

          <div className="h-full w-full flex flex-col items-center justify-start col-span-4 md:col-span-3">
            <div className="w-full rounded-xl bg-gray-100 py-2 px-6">
              <h2 className="text-gray-900 text-2xl font-semibold">₺ {price}</h2>
            </div>
            <div className="w-full flex flex-col gap-2 mt-6">
              <Button className="flex items-center justify-start gap-2">
                <AddToCartIcon className="h-6 w-6" />
                Sepete Ekle
              </Button>
              <Button className="flex items-center justify-start gap-2">
                <FavoriteIcon className="h-6 w-6" />
                Favorilere Ekle
              </Button>
              <Button className="flex items-center justify-start gap-2">
                <ViewIcon className="h-6 w-6" />
                Detayları Gör
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
