import { Button, Card, Image, Input, Radio, RadioGroup, ScrollShadow, cn } from "@nextui-org/react";
import { PiShoppingCart as AddToCartIcon, PiCaretDown as CaretDownIcon } from "react-icons/pi";
import { useEffect, useState } from "react";

type Props = {
  selectedProduct: Product;
};
export const ProductDetailCard = ({ selectedProduct }: Props) => {
  const [mainImage, setMainImage] = useState<string | undefined>(selectedProduct?.images[0]);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedCount, setSelectedCount] = useState<string>("1");
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState<boolean>(false);

  function doColorLight(hex: string, amt: number) {
    let num = parseInt(hex.replace("#", ""), 16);
    let r = (num >> 16) + amt;
    let b = ((num >> 8) & 0x00ff) + amt;
    let g = (num & 0x0000ff) + amt;
    let newColor = g | (b << 8) | (r << 16);

    return "#" + newColor.toString(16);
  }

  const FeatureBadge = ({ feature }: { feature: ProductFeature }) => {
    return (
      <Card
        className={`flex flex-row items-center gap-1 px-4 py-2 rounded-full text-xs sm:text-sm`}
        shadow="sm"
        style={{
          backgroundColor: doColorLight(feature.color, 150),
          color: feature.color,
        }}
      >
        {feature.icon}
        {feature.label}
      </Card>
    );
  };
  const CustomRadio = (props: any) => {
    const { children, count, price } = props;

    return (
      <Radio
        value={props.value}
        isDisabled={count === 0}
        color="warning"
        classNames={{
          base: cn(
            "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
            "flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-2 py-2 px-4 border-2 border-gray-300",
            "data-[selected=true]:border-orange-300"
          ),
        }}
      >
        {children}
      </Radio>
    );
  };

  useEffect(() => {
    if (selectedProduct) {
      setMainImage(selectedProduct.images[0]);
      setSelectedSize(selectedProduct.sizes.find((item) => item.stock > 0)?.size || "");
    }
  }, [selectedProduct]);

  return (
    <Card className="w-full grid grid-rows-[1fr-2fr,2fr] md:grid-cols-[1fr,5fr,5fr] gap-4 md:gap-8 py-4 px-8 lg:h-[60vh]" shadow="md">
      {/* Vertical Scrollable Images */}
      <ScrollShadow hideScrollBar>
        <div className="relative overflow-auto scrollbar-hide flex flex-row md:flex-col gap-3">
          {selectedProduct?.images.map((image, index) => (
            <Button
              key={index}
              className="relative w-full h-full max-h-28 aspect-square p-0 rounded-xl overflow-hidden"
              onClick={() => setMainImage(image)}
            >
              <div className="flex items-center justify-center font-poppins font-semibold text-gray-300 text-l bg-gray-900/25 absolute inset-0 rounded-xl">
                {(index + 1).toString()}
              </div>
              <img alt={selectedProduct?.name} className="w-full h-full object-cover rounded-xl" src={image} />
            </Button>
          ))}
        </div>
      </ScrollShadow>
      {/* Main Image */}
      <div className="w-full h-full relative rounded-xl overflow-hidden">
        <Image isZoomed alt={selectedProduct?.name} className="w-full h-full object-cover rounded-xl" src={mainImage || ""} />
      </div>
      {/* Product Details */}
      <div className="flex flex-col gap-3 pt-2 md:pt-8">
        <h1 className="font-poppins font-semibold text-gray-800 text-2xl">{selectedProduct?.name}</h1>
        {isDescriptionExpanded ? (
          <p className="font-poppins text-sm md:text-md text-gray-800">{selectedProduct?.description}</p>
        ) : (
          <div className="flex flex-col items-center gap-2 mb-4 md:mb-0">
            <p className="font-poppins text-sm md:text-md text-gray-800 line-clamp-3">{selectedProduct?.description}</p>
            <Button
              className="w-full flex items-center gap-2 text-md md:text-lg"
              color="default"
              variant="light"
              onClick={() => setIsDescriptionExpanded(true)}
            >
              <CaretDownIcon className="h-6 w-6" />
            </Button>
          </div>
        )}

        <div className="mt-2 flex flex-wrap gap-2 mb-4">
          {selectedProduct?.features?.map((feature, index) => <FeatureBadge feature={feature} key={index} />)}
        </div>
        <RadioGroup
          classNames={{
            wrapper: "grid grid-cols-4 lg:grid-cols-4",
          }}
          className="mt-auto"
          orientation="horizontal"
          value={selectedSize}
          onValueChange={(value) => setSelectedSize(value)}
        >
          {selectedProduct?.sizes.map((item, index) => (
            <CustomRadio key={index} value={item.size} count={item.stock} price={item.price}>
              {item.size}
            </CustomRadio>
          ))}
        </RadioGroup>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr,1fr] gap-2">
          <Input
            color="warning"
            variant="faded"
            className="w-full"
            type="number"
            placeholder="1"
            min={1}
            max={selectedProduct?.sizes.find((item) => item.size === selectedSize)?.stock}
            defaultValue="1"
            value={selectedCount}
            onChange={(e) => setSelectedCount(e.target.value)}
            startContent={<span className="text-gray-500 text-sm font-poppins">Adet:</span>}
            endContent={
              <span className="whitespace-nowrap text-gray-500 text-sm font-poppins">
                {selectedSize ? `Stok: ${selectedProduct?.sizes.find((item) => item.size === selectedSize)?.stock}` : ""}
              </span>
            }
            errorMessage={"Girdiğiniz adet geçerli değil. Lütfen stok durumunu kontrol ederek tekrar deneyin."}
          />
          <Button className="flex items-center gap-2 py-2 text-sm md:text-md" color="warning" variant="faded">
            <AddToCartIcon className="h-5 w-5" />
            Sepete Ekle
          </Button>
        </div>
      </div>
    </Card>
  );
};
