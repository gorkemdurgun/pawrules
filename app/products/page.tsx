"use client";

import { ProductCard } from "@/components";
import { title } from "@/components/primitives";
import { fakeProducts } from "@/data/product";
import {
  Select,
  SelectItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  SelectSection,
  Input,
  Badge,
  Accordion,
  AccordionItem,
  Checkbox,
  CheckboxGroup,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import { NextPage } from "next";
import { useState } from "react";
import { FaSearch, FaTimes as CrossIcon } from "react-icons/fa";
import {
  PiCaretLeftBold as ArrowLeftIcon,
  PiDotsThreeCircleDuotone as OtherIcon,
  PiCatDuotone as CatIcon,
  PiDogDuotone as DogIcon,
  PiBirdDuotone as BirdIcon,
  PiFishDuotone as FishIcon,
  PiTennisBallDuotone as ToyIcon,
  PiBedDuotone as BedIcon,
  PiBeltDuotone as AccessoryIcon,
  PiHandSoapDuotone as CareIcon,
} from "react-icons/pi";

const fakeTurler = [
  {
    section: "Pet",
    items: [
      {
        value: "kedi",
        label: "Kedi",
      },
      {
        value: "köpek",
        label: "Köpek",
      },
    ],
  },
  {
    section: "Kuş",
    items: [
      {
        value: "muhabbet",
        label: "Muhabbet Kuşu",
      },
      {
        value: "papağan",
        label: "Papağan",
      },
    ],
  },
  {
    section: "Balık",
    items: [
      {
        value: "beta",
        label: "Beta",
      },
      {
        value: "moli",
        label: "Moli",
      },
    ],
  },
  {
    section: "Diğer",
    items: [
      {
        value: "tavşan",
        label: "Tavşan",
      },
      {
        value: "kemirgen",
        label: "Kemirgen",
      },
    ],
  },
];
const fakeKategoriler = [
  { section: "Oyuncak", items: ["Tünel", "Top", "Kedi Çubuğu", "Köpek Oyuncakları"] },
  { section: "Yatak", items: ["Açık Yatak", "Kapalı Yatak"] },
  { section: "Mama", items: ["Kuru Mama", "Yaş Mama"] },
  { section: "Aksesuar", items: ["Tasma", "Ağızlık", "Kemik"] },
  { section: "Bakım", items: ["Şampuan", "Tarak", "Tıraş Makinesi"] },
  { section: "Diğer", items: ["Taşıma Çantası", "Kum", "Kedi Kumu"] },
];
const fakeFiyatlar = [
  { value: "0-50", label: "0-50" },
  { value: "50-100", label: "50-100" },
  { value: "100-200", label: "100-200" },
  { value: "200-500", label: "200-500" },
  { value: "500+", label: "500+" },
];
const fakeSiralama = [
  { value: "en-yuksek", label: "En Yüksek" },
  { value: "en-dusuk", label: "En Düşük" },
];
const fakeSelected = [
  { category: "Tür", value: "Kedi" },
  { category: "Tür", value: "Köpek" },
  { category: "Kategori", value: "Tünel" },
  { category: "Fiyat Aralığı", value: "50-100" },
  { category: "Fiyat Aralığı", value: "100-200" },
];

const ProductsPage: NextPage = () => {
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
            placeholder="Ara..."
            className="w-full "
            classNames={{
              inputWrapper: "bg-white",
            }}
          />
          <Button className="bg-orange-600 text-white">
            <FaSearch className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="w-full flex flex-wrap items-center gap-4">
        {selectedTypes.map((item, index) => (
          <Button key={index} className="bg-white border border-gray-50 text-gray-900 flex items-center gap-2 font-reddit shadow-lg">
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
            selectionMode="multiple"
            defaultExpandedKeys={["type", "category", "price", "sort"]}
            className="w-full"
            itemClasses={{
              title: "font-reddit text-lg text-default-900",
              indicator: "text-orange-600 font-bold",
            }}
          >
            {/* Types */}
            <AccordionItem key="type" title="Tür" indicator={<ArrowLeftIcon className="h-5 w-5" />}>
              <CheckboxGroup
                color="warning"
                classNames={{
                  wrapper: "grid grid-cols-2 md:flex md:flex-col gap-3 pb-3",
                }}
                value={selectedTypes}
                onValueChange={setSelectedTypes}
              >
                <Checkbox
                  classNames={{
                    label: "flex flex-row items-center gap-2",
                  }}
                  value="cat"
                >
                  <CatIcon className="h-6 w-6" />
                  Kedi
                </Checkbox>
                <Checkbox
                  classNames={{
                    label: "flex flex-row items-center gap-2",
                  }}
                  value="dog"
                >
                  <DogIcon className="h-6 w-6" />
                  Köpek
                </Checkbox>
                <Checkbox
                  classNames={{
                    label: "flex flex-row items-center gap-2",
                  }}
                  value="other"
                >
                  <OtherIcon className="h-6 w-6" />
                  Diğer
                </Checkbox>
              </CheckboxGroup>
            </AccordionItem>
            {/* Categories */}
            <AccordionItem key="category" title="Kategori" indicator={<ArrowLeftIcon className="h-5 w-5" />}>
              <CheckboxGroup
                color="warning"
                classNames={{
                  wrapper: "grid grid-cols-2 md:flex md:flex-col gap-3 pb-3",
                }}
                value={selectedCategories}
                onValueChange={setSelectedCategories}
              >
                <Checkbox
                  classNames={{
                    label: "flex flex-row items-center gap-2",
                  }}
                  value="toy"
                >
                  <ToyIcon className="h-6 w-6" />
                  Oyuncak
                </Checkbox>
                <Checkbox
                  classNames={{
                    label: "flex flex-row items-center gap-2",
                  }}
                  value="bed"
                >
                  <BedIcon className="h-6 w-6" />
                  Yatak
                </Checkbox>
                <Checkbox
                  classNames={{
                    label: "flex flex-row items-center gap-2",
                  }}
                  value="accessory"
                >
                  <AccessoryIcon className="h-6 w-6" />
                  Aksesuar
                </Checkbox>
                <Checkbox
                  classNames={{
                    label: "flex flex-row items-center gap-2",
                  }}
                  value="care"
                >
                  <CareIcon className="h-6 w-6" />
                  Bakım
                </Checkbox>
              </CheckboxGroup>
            </AccordionItem>
            {/* Price */}
            <AccordionItem key="price" title="Fiyat Aralığı" indicator={<ArrowLeftIcon className="h-5 w-5" />}>
              <RadioGroup
                color="warning"
                classNames={{
                  wrapper: "grid grid-cols-2 md:flex md:flex-col gap-3 pb-3",
                }}
                value={selectedPriceRange}
                onValueChange={setSelectedPriceRange}
              >
                <Radio value="0-100">0-100</Radio>
                <Radio value="100-200">100-200</Radio>
                <Radio value="200-500">200-500</Radio>
                <Radio value="500+">500+</Radio>
              </RadioGroup>
            </AccordionItem>
            {/* Sort */}
            <AccordionItem key="sort" title="Sıralama" indicator={<ArrowLeftIcon className="h-5 w-5" />}>
              <RadioGroup
                color="warning"
                classNames={{
                  wrapper: "grid grid-cols-2 md:flex md:flex-col gap-3 pb-3",
                }}
                value={selectedSort}
                onValueChange={setSelectedSort}
              >
                <Radio value="en-yuksek">Pahalıdan Ucuza</Radio>
                <Radio value="en-dusuk">Ucuzdan Pahalıya</Radio>
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
