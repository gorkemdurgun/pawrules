"use client";

import { Button, Input, Accordion, AccordionItem, Checkbox, CheckboxGroup, RadioGroup, Radio } from "@nextui-org/react";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSearch, FaTimes as CrossIcon } from "react-icons/fa";
import {
  PiCaretLeftBold as ArrowLeftIcon,
  PiDotsThreeCircleDuotone as OtherIcon,
  PiCatDuotone as CatIcon,
  PiDogDuotone as DogIcon,
  PiTennisBallDuotone as ToyIcon,
  PiBedDuotone as BedIcon,
  PiBeltDuotone as AccessoryIcon,
} from "react-icons/pi";

import { fakeProducts } from "@/data/product";
import { ProductCard } from "@/components";

const types = [
  { value: "cat", label: "Kedi", icon: <CatIcon className="h-6 w-6" /> },
  { value: "dog", label: "Köpek", icon: <DogIcon className="h-6 w-6" /> },
  { value: "other", label: "Diğer", icon: <OtherIcon className="h-6 w-6" /> },
];
const categories = [
  { value: "toy", label: "Oyuncak", icon: <ToyIcon className="h-6 w-6" /> },
  { value: "bed", label: "Yatak", icon: <BedIcon className="h-6 w-6" /> },
  {
    value: "accessory",
    label: "Aksesuar",
    icon: <AccessoryIcon className="h-6 w-6" />,
  },
  // { value: "care", label: "Bakım", icon: <CareIcon className="h-6 w-6" /> },
];
const priceRanges = [
  { value: "0-100", label: "0-100" },
  { value: "100-200", label: "100-200" },
  { value: "200-500", label: "200-500" },
  { value: "500+", label: "500+" },
];
const sorts = [
  { value: "desc", label: "Pahalıdan Ucuza" },
  { value: "asc", label: "Ucuzdan Pahalıya" },
];

const ProductsPage: NextPage = () => {
  const router = useRouter();

  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("");
  const [selectedSort, setSelectedSort] = useState<string>("");

  return (
    <div className="container mx-auto  max-w-7xl min-h-[100vh] flex flex-col items-start gap-8">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
        <h5 className="font-poppins font-semibold text-gray-800 text-2xl lg:text-3xl">
          En güzel ürünlerimizi <span className="text-orange-600">keşfedin</span>
        </h5>
        <div className="w-full md:w-1/2 flex items-center justify-end gap-4">
          <Input
            className="w-full "
            classNames={{
              inputWrapper: "bg-white",
            }}
            placeholder="Ara..."
          />
          <Button className="bg-orange-600 text-white">
            <FaSearch className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="w-full flex flex-wrap items-center gap-4">
        {selectedTypes.map((item, index) => (
          <Button className="bg-white border border-gray-50 text-gray-900 flex items-center gap-2 font-reddit shadow-lg" key={index}>
            {selectedTypes.find((type) => type === item)}
            <CrossIcon className="h-4 w-4 p-1 bg-red-100 text-red-500 rounded-full" />
          </Button>
        ))}
        {selectedCategories.map((item, index) => (
          <Button className="bg-white border border-gray-50 text-gray-900 flex items-center gap-2 font-reddit shadow-lg" key={index}>
            {item}
            <CrossIcon className="h-4 w-4 p-1 bg-red-100 text-red-500 rounded-full" />
          </Button>
        ))}
      </div>
      <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-4 md:gap-8 py-2 md:py-4">
        {/* Filters */}
        <div className="w-full lg:w-1/5 flex flex-col gap-4">
          <h3 className="font-poppins font-semibold text-gray-800 text-lg lg:text-xl">Filtrele</h3>
          <Accordion
            className="w-full"
            defaultExpandedKeys={["type", "category", "price", "sort"]}
            itemClasses={{
              title: "font-reddit text-lg text-default-900",
              indicator: "text-orange-600 font-bold",
            }}
            selectionMode="multiple"
          >
            {/* Types */}
            <AccordionItem indicator={<ArrowLeftIcon className="h-5 w-5" />} key="type" title="Tür">
              <CheckboxGroup
                classNames={{
                  wrapper: "grid grid-cols-2 md:flex md:flex-col gap-3 pb-3",
                }}
                color="warning"
                value={selectedTypes}
                onValueChange={setSelectedTypes}
              >
                {types.map((type) => (
                  <Checkbox
                    classNames={{
                      label: "flex flex-row items-center gap-2",
                    }}
                    key={type.value}
                    value={type.value}
                  >
                    {type.icon}
                    {type.label}
                  </Checkbox>
                ))}
              </CheckboxGroup>
            </AccordionItem>
            {/* Categories */}
            <AccordionItem indicator={<ArrowLeftIcon className="h-5 w-5" />} key="category" title="Kategori">
              <CheckboxGroup
                classNames={{
                  wrapper: "grid grid-cols-2 md:flex md:flex-col gap-3 pb-3",
                }}
                color="warning"
                value={selectedCategories}
                onValueChange={setSelectedCategories}
              >
                {categories.map((category) => (
                  <Checkbox
                    classNames={{
                      label: "flex flex-row items-center gap-2",
                    }}
                    key={category.value}
                    value={category.value}
                  >
                    {category.icon}
                    {category.label}
                  </Checkbox>
                ))}
              </CheckboxGroup>
            </AccordionItem>
            {/* Price */}
            <AccordionItem indicator={<ArrowLeftIcon className="h-5 w-5" />} key="price" title="Fiyat Aralığı">
              <RadioGroup
                classNames={{
                  wrapper: "grid grid-cols-2 md:flex md:flex-col gap-3 pb-3",
                }}
                color="warning"
                value={selectedPriceRange}
                onValueChange={setSelectedPriceRange}
              >
                {priceRanges.map((range) => (
                  <Radio key={range.value} value={range.value}>
                    {range.label}
                  </Radio>
                ))}
              </RadioGroup>
            </AccordionItem>
            {/* Sort */}
            <AccordionItem indicator={<ArrowLeftIcon className="h-5 w-5" />} key="sort" title="Sıralama">
              <RadioGroup
                classNames={{
                  wrapper: "grid grid-cols-2 md:flex md:flex-col gap-3 pb-3",
                }}
                color="warning"
                value={selectedSort}
                onValueChange={setSelectedSort}
              >
                {sorts.map((sort) => (
                  <Radio key={sort.value} value={sort.value}>
                    {sort.label}
                  </Radio>
                ))}
              </RadioGroup>
            </AccordionItem>
          </Accordion>
        </div>
        {/* Products */}
        <div className="w-full lg:w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 ">
          {fakeProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
