"use client";

import { ProductCard } from "@/components";
import { title } from "@/components/primitives";
import { fakeProducts } from "@/data/product";
import { Select, SelectItem, Card, CardHeader, CardBody, CardFooter, Image, Button, SelectSection } from "@nextui-org/react";
import { NextPage } from "next";
import { PiCreditCard as QuickShopIcon, PiShoppingCartDuotone as AddToCartIcon } from "react-icons/pi";

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

const ProductsPage: NextPage = () => {
  return (
    <div className="container mx-auto  max-w-7xl min-h-[100vh] flex flex-col items-start gap-4">
      <h1 className={title({ color: "yellow", className: "font-reddit !leading-[4rem] text-4xl font-bold text-center w-full" })}>Ürünler</h1>
      {/* Filters */}
      <div className="w-full grid grid-cols-1 gap-2 md:grid-cols-4">
        <Select
          label="Tür"
          placeholder="Evcil hayvan türünü seçin"
          selectionMode="multiple"
          className="max-w-xs font-reddit"
          classNames={{
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
          placeholder="Kategori seçin"
          selectionMode="multiple"
          className="max-w-xs font-reddit"
          classNames={{
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
          placeholder="Fiyat aralığını seçin"
          selectionMode="multiple"
          className="max-w-xs font-reddit"
          classNames={{
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
          placeholder="Sıralama seçin"
          selectionMode="single"
          className="max-w-xs font-reddit"
          classNames={{
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
      {/* Products */}
      <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-3">
        {fakeProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
