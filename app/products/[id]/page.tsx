"use client";

import { BreadcrumbItem, Breadcrumbs, Button, Card, Image, Input, Pagination, Radio, RadioGroup, ScrollShadow, cn } from "@nextui-org/react";
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
import { ProductDetailCard, ProductSmallCard } from "@/components";

const ProductIdPage = () => {
  const { id } = useParams();
  const router = useRouter();

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
            "flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-2 py-2 px-4 border-2 border-gray-300",
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
        <ProductDetailCard selectedProduct={selectedProduct} />
        {/* Reviews */}
        <div className="w-full flex flex-col-reverse sm:flex-col gap-4 mt-8 sm:mt-12">
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
              {selectedProduct?.reviews?.slice(0, 3).map((review, index) => (
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
              <ProductSmallCard key={index} product={product} onClick={() => router.push(`/products/${product.id}`)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductIdPage;
