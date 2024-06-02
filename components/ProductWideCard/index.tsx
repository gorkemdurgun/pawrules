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
  PiShoppingBagOpenDuotone as QuickBuyIcon,
  PiCaretCircleRightDuotone as ViewIcon,
} from "react-icons/pi";
import { motion } from "framer-motion";

export const ProductWideCard = ({ id, name, description, shortDescription, images, price, tags }: Product) => {
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
            {images[0] && (
              <Image
                alt="Thumbnail"
                className="object-cover transition-transform duration-300 ease-in-out"
                width="100%"
                height="100%"
                src={images[0]}
              />
            )}
          </motion.div>

          <div className="h-full flex flex-col items-start justify-center py-4 gap-2 col-span-4 md:col-span-5">
            <h3 className="font-reddit font-semibold text-foreground/90 text-3xl">{name}</h3>
            <p className="hidden md:flex text-justify text-small text-foreground/80">{description}</p>
            <p className="md:hidden text-justify text-small text-foreground/80">{shortDescription}</p>
            <div className="hidden lg:flex flex-wrap items-center justify-start gap-2 mt-auto mb-0">
              {tags.map((tag) => (
                <Code key={tag} className="bg-gray-100 text-gray-500">
                  #{tag}
                </Code>
              ))}
            </div>
          </div>

          <div className="h-full w-full flex flex-col items-center justify-start col-span-4 md:col-span-3">
            <div className="lg:h-full w-full flex items-center justify-center rounded-xl bg-gray-50 py-2 px-6">
              <h2 className="text-gray-900 text-2xl lg:text-4xl xl:text-5xl font-poppins font-semibold">₺ {price}</h2>
            </div>
            <div className="w-full grid grid-cols-3 md:flex md:flex-col gap-2 mt-6">
              <Button className="flex items-center justify-center md:justify-start gap-2 bg-gray-100 text-gray-900">
                <AddToCartIcon className="h-6 w-6" />
                <h4 className="hidden sm:flex">Sepete Ekle</h4>
              </Button>
              <Button className="flex items-center justify-center md:justify-start gap-2 bg-gray-100 text-gray-900">
                <QuickBuyIcon className="h-6 w-6" />
                <h4 className="hidden sm:flex">Hızlı Satın Al</h4>
              </Button>
              <Button className="flex items-center justify-center md:justify-start gap-2 bg-gray-100 text-gray-900">
                <ViewIcon className="h-6 w-6" />
                <h4 className="hidden sm:flex">Detaylar</h4>
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
