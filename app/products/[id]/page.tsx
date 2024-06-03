"use client";

import { BreadcrumbItem, Breadcrumbs, Button, Card, Input, Pagination, Radio, RadioGroup, ScrollShadow, cn } from "@nextui-org/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  PiCaretLeft as ArrowLeftIcon,
  PiShoppingCart as AddToCartIcon,
  PiCaretDown as CaretDownIcon,
  PiStarHalfFill as HalfStarIcon,
  PiStarFill as FullStarIcon,
  PiStar as EmptyStarIcon,
} from "react-icons/pi";

import { fakeProducts } from "@/data/product";

const ProductIdPage = () => {
  const { id } = useParams();
  const router = useRouter();

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  useEffect(() => {
    const product = fakeProducts.find((product) => product.id === id);

    if (product) {
      setSelectedProduct(product);
      setMainImage(product.images[0]);
      setSelectedSize(product.sizes.find((item) => item.stock > 0)?.size || null);
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
  function reviewCalculation(reviews: ProductReview[]) {
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return Math.round((sum / reviews.length) * 2) / 2;
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
            "flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 py-2 px-4 border-2 border-gray-300",
            "data-[selected=true]:border-orange-300"
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
    <div className="container mx-auto max-w-7xl min-h-[100vh] pb-24 flex flex-col items-start gap-4">
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
        {/* Price Tag */}
        <div className="z-10 absolute -top-[60px] -right-0 md:-top-[16px] md:-right-[16px]">
          <span className="flex items-center py-2 md:py-4 px-6 md:px-12 gap-2 bg-gray-50 border border-gray-200 rounded-3xl shadow-lg">
            <p className="font-poppins font-semibold text-gray-800 text-2xl lg:text-3xl">₺ {selectedProduct?.price}</p>
          </span>
        </div>
        {/* Product Card */}
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
                wrapper: "grid grid-cols-2 lg:grid-cols-4",
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
                startContent={<span className="text-gray-500 text-sm font-poppins">Adet:</span>}
                endContent={
                  <span className="whitespace-nowrap text-gray-500 text-sm font-poppins">
                    {selectedSize ? `Stok: ${selectedProduct?.sizes.find((item) => item.size === selectedSize)?.stock}` : ""}
                  </span>
                }
              />
              <Button className="flex items-center gap-2 py-2 text-sm md:text-md" color="warning" variant="faded">
                <AddToCartIcon className="h-5 w-5" />
                Sepete Ekle
              </Button>
            </div>
          </div>
        </Card>
        {/* Reviews */}
        <div className="w-full flex flex-col-reverse sm:flex-col gap-4 mt-8 sm:mt-20">
          <div className="flex flex-row-reverse md:flex-row items-center justify-between gap-4">
            <h2 className="hidden sm:flex font-poppins font-semibold text-orange-600 text-2xl">Yorumlar</h2>
            <Pagination color="default" variant="faded" total={10} initialPage={1} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[1fr,3fr] gap-6 md:gap-16">
            {/* Overall Rating */}
            <Card className="flex flex-col items-center gap-4 p-4">
              <h3 className="font-poppins font-semibold text-gray-800 text-lg">Genel Değerlendirme</h3>
              <div className="w-full h-full grid grid-cols-[2fr,3fr] md:flex md:flex-col items-center justify-between gap-3">
                {/** Overview Values */}
                <div className="flex flex-col items-center gap-2">
                  <span className="font-poppins font-semibold text-gray-800 text-4xl">
                    {reviewCalculation(selectedProduct?.reviews).toFixed(1)}
                    <span className="font-poppins font-normal text-gray-600 text-lg"> / 5</span>
                  </span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => {
                      if (reviewCalculation(selectedProduct?.reviews) >= star) {
                        return <FullStarIcon key={star} className="h-5 w-5 text-orange-600" />;
                      } else if (reviewCalculation(selectedProduct?.reviews) + 0.5 === star) {
                        return <HalfStarIcon key={star} className="h-5 w-5 text-orange-600" />;
                      } else {
                        return <EmptyStarIcon key={star} className="h-5 w-5 text-orange-600" />;
                      }
                    })}
                  </div>
                  {/** Review Count */}
                  <span className="font-poppins font-normal text-gray-600 text-md">{selectedProduct?.reviews.length} Yorum</span>
                </div>
                {/** Review Bars */}
                <div className="mt-auto w-full grid grid-cols-1 gap-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex flex-col gap-1">
                      <span className="font-poppins font-semibold text-end md:text-start text-gray-800 text-sm">{rating} Yıldız</span>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-full bg-orange-600 rounded-full"
                          style={{
                            width: `${
                              (selectedProduct?.reviews.filter((review) => review.rating === rating).length / selectedProduct?.reviews.length) *
                              100
                            }%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
            {/* Review List */}
            <div className="w-full flex flex-col gap-3">
              {selectedProduct?.reviews?.slice(0, 4).map((review, index) => (
                <Card key={index} className="flex flex-col gap-2 p-4">
                  <div className="flex items-center gap-2">
                    <span className="font-poppins font-semibold text-gray-800 text-lg">{review.username}</span>
                    <div className="ml-auto flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => {
                        if (review.rating >= star) {
                          return <FullStarIcon key={star} className="h-5 w-5 text-orange-600" />;
                        } else if (review.rating + 0.5 === star) {
                          return <HalfStarIcon key={star} className="h-5 w-5 text-orange-600" />;
                        } else {
                          return <EmptyStarIcon key={star} className="h-5 w-5 text-orange-600" />;
                        }
                      })}
                    </div>
                  </div>
                  <p className="font-poppins font-normal text-gray-600 text-md">{review.content}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
        {/* You may also like */}
        <div className="w-full flex flex-col gap-4 mt-20">
          <h2 className="font-poppins font-semibold text-orange-600 text-2xl">Bunlar da ilginizi çekebilir</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {fakeProducts.map((product, index) => (
              <Card
                key={index}
                className="flex flex-col gap-2"
                shadow="md"
                isHoverable
                isPressable
                onClick={() => router.push(`/products/${product.id}`)}
              >
                <img alt={product.name} className="w-full h-52 object-cover rounded-xl" src={product.images[0]} />
                <div className="flex flex-col items-start gap-1 px-4 pt-2 pb-4 rounded-b-xl">
                  <h3 className="font-poppins font-semibold text-gray-800 text-lg">{product.name}</h3>
                  <p className="font-poppins font-normal text-gray-600 text-md">{product.price} ₺</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductIdPage;
