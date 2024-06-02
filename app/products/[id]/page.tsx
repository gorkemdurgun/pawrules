"use client";

import { BreadcrumbItem, Breadcrumbs, Button, Card, Radio, RadioGroup, ScrollShadow, cn } from "@nextui-org/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PiCaretLeft as ArrowLeftIcon, PiShoppingCart as AddToCartIcon, PiCreditCard as QuickBuyIcon } from "react-icons/pi";

import { fakeProducts } from "@/data/product";

const ProductIdPage = () => {
  const { id } = useParams();
  const router = useRouter();

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [mainImage, setMainImage] = useState<string | null>(null);

  useEffect(() => {
    const product = fakeProducts.find((product) => product.id === id);

    if (product) {
      setSelectedProduct(product);
      setMainImage(product.images[0]);
    } else {
      setSelectedProduct(null);
    }
  }, [id]);

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
    const { children } = props;

    return (
      <Radio
        value={props.value}
        color="default"
        classNames={{
          base: cn(
            "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
            "flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 py-2 px-4 border-2 border-gray-300",
            "data-[selected=true]:border-default-500"
          ),
        }}
      >
        {children}
      </Radio>
    );
  };

  // If the product is not found, return a 404 page
  if (!selectedProduct) {
    return <h1>404 - Not Found</h1>;
  }

  return (
    <div className="container mx-auto max-w-7xl min-h-[100vh] flex flex-col items-start gap-4">
      <Breadcrumbs className="mb-4" separator=">">
        <BreadcrumbItem href="/products">Ürünler</BreadcrumbItem>
        <BreadcrumbItem href={`/products/${selectedProduct.id}`}>{selectedProduct?.name}</BreadcrumbItem>
      </Breadcrumbs>
      <div className="w-full flex flex-row items-center justify-between gap-4">
        <Button className="flex items-center gap-2" variant="light" onClick={() => router.back()}>
          <ArrowLeftIcon className="h-5 w-5" />
          Geri Dön
        </Button>
      </div>
      <div className="relative">
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
            <img alt={selectedProduct?.name} className="w-full h-full object-cover rounded-xl" src={mainImage || ""} />
          </div>
          {/* Product Details */}
          <div className="flex flex-col gap-3 pt-2 md:pt-8">
            <h1 className="font-poppins font-semibold text-gray-800 text-2xl">{selectedProduct?.name}</h1>
            <p className="font-poppins text-sm md:text-md text-gray-800">{selectedProduct?.description}</p>
            <div className="mt-2 flex flex-wrap gap-2 mb-4">
              {selectedProduct?.features?.map((feature, index) => <FeatureBadge feature={feature} key={index} />)}
            </div>
            <RadioGroup
              classNames={{
                wrapper: "grid grid-cols-2 lg:grid-cols-4",
              }}
              className="mt-auto"
              orientation="horizontal"
              defaultValue="xs"
            >
              <CustomRadio value="s">S</CustomRadio>
              <CustomRadio value="m">M</CustomRadio>
              <CustomRadio value="l">L</CustomRadio>
              <CustomRadio value="xl">XL</CustomRadio>
            </RadioGroup>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <Button className="flex items-center gap-2 py-4 text-sm md:text-md" color="default" variant="faded">
                <QuickBuyIcon className="h-5 w-5" />
                Hızlı Satın Al
              </Button>
              <Button className="flex items-center gap-2 py-2 text-sm md:text-md" color="default" variant="faded">
                <AddToCartIcon className="h-5 w-5" />
                Sepete Ekle
              </Button>
            </div>
          </div>
        </Card>
        <div className="absolute -top-[60px] -right-0 md:-top-[32px] md:-right-[32px]">
          <span className="flex items-center py-2 md:py-4 px-6 md:px-12 gap-2 bg-gray-100 border border-gray-200 rounded-3xl shadow-lg">
            <p className="font-poppins font-semibold text-gray-800 text-2xl lg:text-3xl">{selectedProduct?.price} ₺</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductIdPage;
