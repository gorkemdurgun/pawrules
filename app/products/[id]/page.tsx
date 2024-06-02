"use client";

import { BreadcrumbItem, Breadcrumbs, Button, Card, ScrollShadow } from "@nextui-org/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PiCaretLeft as ArrowLeftIcon, PiShoppingCart as AddToCartIcon } from "react-icons/pi";

import { fakeProducts } from "@/data/product";

const ProductIdPage = () => {
  const { id } = useParams();

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const product = fakeProducts.find((product) => product.id === id);

    if (product) {
      setSelectedProduct(product);
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
        className={`flex flex-row items-center gap-1 px-4 py-2 rounded-full text-sm`}
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

  // If the product is not found, return a 404 page
  if (!selectedProduct) {
    return <h1>404 - Not Found</h1>;
  }

  return (
    <div className="container mx-auto  max-w-7xl min-h-[100vh] flex flex-col items-start gap-4">
      <Breadcrumbs className="mb-4" separator=">">
        <BreadcrumbItem href="/products">Ürünler</BreadcrumbItem>
        <BreadcrumbItem href={`/products/${selectedProduct.id}`}>{selectedProduct?.name}</BreadcrumbItem>
      </Breadcrumbs>
      <div className="w-full flex flex-row items-center justify-between gap-4">
        <Button className="flex items-center gap-2" variant="light">
          <ArrowLeftIcon className="h-5 w-5" />
          Geri Dön
        </Button>
        <div className="flex flex-row items-center gap-4">
          <span className="bg-orange-200 border-2 border-orange-300 text-white py-1 px-12 rounded-full flex items-center gap-2">
            <p className="font-poppins font-semibold text-gray-900 text-xl lg:text-2xl">{selectedProduct?.price} ₺</p>
          </span>
          <Button className="flex items-center gap-2 text-md md:text-lg" color="warning" variant="flat">
            <AddToCartIcon className="h-6 w-6" />
            Sepete Ekle
          </Button>
        </div>
      </div>
      <Card className="w-full grid grid-cols-[1fr,4fr,4fr] gap-8 py-4 px-8 h-[60vh]" shadow="md">
        {/* Vertical Scrollable Images */}
        <ScrollShadow className="scrollbar-hide">
          <div className="overflow-y-auto flex flex-col gap-3 scrollbar-hide">
            {selectedProduct?.images.map((image, index) => (
              <div className="w-full h-full max-h-28 aspect-square rounded-xl overflow-hidden" key={index}>
                <img alt={selectedProduct?.name} className="w-full h-full object-cover rounded-xl" src={image} />
              </div>
            ))}
          </div>
        </ScrollShadow>
        {/* Main Image */}
        <div className="w-full h-full relative rounded-xl overflow-hidden">
          <img alt={selectedProduct?.name} className="w-full h-full object-cover rounded-xl" src={selectedProduct?.images[0]} />
        </div>
        {/* Product Details */}
        <div className="flex flex-col gap-4 py-6">
          <h1 className="font-poppins font-semibold text-gray-800 text-2xl">{selectedProduct?.name}</h1>
          <p className="font-poppins text-md text-justify text-gray-800">{selectedProduct?.description}</p>
          <div className="mt-auto grid grid-cols-4 gap-2">
            <span>stok s</span>
            <span>stok m</span>
            <span>stok l</span>
            <span>stok xl</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedProduct?.features?.map((feature, index) => <FeatureBadge feature={feature} key={index} />)}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductIdPage;
