"use client";

import { ProductCard } from "@/components";
import { title } from "@/components/primitives";
import { fakeProducts } from "@/data/product";
import { Select, SelectItem, Card, CardHeader, CardBody, CardFooter, Image, Button, SelectSection, Input, Badge } from "@nextui-org/react";
import { NextPage } from "next";
import { FaSearch, FaTimes as CrossIcon } from "react-icons/fa";

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
        {fakeSelected.map((item) => (
          <Button key={item.value} className="bg-white border border-gray-50 text-gray-900 flex items-center gap-2 font-reddit shadow-lg">
            {item.value}
            <CrossIcon className="h-4 w-4 p-1 bg-red-100 text-red-500 rounded-full" />
          </Button>
        ))}
      </div>
      <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-4 md:gap-8 py-2 md:py-4">
        {/* Filters */}
        <div className="lg:w-1/4 flex flex-col gap-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-3">
            <Select
              label="Tür"
              labelPlacement="outside"
              placeholder="Evcil hayvan türünü seçin"
              selectionMode="multiple"
              className="lg:max-w-xs font-reddit"
              classNames={{
                label: "font-semibold",
                trigger: "bg-white",
                popoverContent: "bg-white",
              }}
            >
              {fakeTurler.map((item) => (
                <SelectSection showDivider key={item.section} title={item.section}>
                  {item.items.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectSection>
              ))}
            </Select>
            <Select
              label="Kategori"
              labelPlacement="outside"
              placeholder="Kategori seçin"
              selectionMode="multiple"
              className="lg:max-w-xs font-reddit"
              classNames={{
                label: "font-semibold",
                trigger: "bg-white",
                popoverContent: "bg-white",
              }}
            >
              {fakeKategoriler.map((item) => (
                <SelectSection showDivider key={item.section} title={item.section}>
                  {item.items.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectSection>
              ))}
            </Select>
            <Select
              label="Fiyat Aralığı"
              labelPlacement="outside"
              placeholder="Fiyat aralığını seçin"
              selectionMode="multiple"
              className="lg:max-w-xs font-reddit"
              classNames={{
                label: "font-semibold",
                trigger: "bg-white",
                popoverContent: "bg-white",
              }}
            >
              {fakeFiyatlar.map((price) => (
                <SelectItem key={price.value} value={price.value}>
                  {price.label}
                </SelectItem>
              ))}
            </Select>
            <Select
              label="Sıralama"
              labelPlacement="outside"
              placeholder="Sıralama seçin"
              selectionMode="single"
              className="lg:max-w-xs font-reddit"
              classNames={{
                label: "font-semibold",
                trigger: "bg-white",
                popoverContent: "bg-white",
              }}
            >
              {fakeSiralama.map((sort) => (
                <SelectItem key={sort.value} value={sort.value}>
                  {sort.label}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
        {/* Products */}
        <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 ">
          {fakeProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
