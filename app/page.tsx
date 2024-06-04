"use client";

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, HeartFilledIcon } from "@/components/icons";
import { Accordion, AccordionItem, Avatar, Button, Card, CardBody, Image as NextUIImage, Input, Kbd } from "@nextui-org/react";
import {
  PiCursorClickDuotone as Click,
  PiCurrencyCircleDollarDuotone as Money,
  PiHandHeartDuotone as VirusIcon,
  PiSparkleDuotone as StarIcon,
  PiTruckDuotone as CarIcon,
  PiPhoneCallDuotone as PhoneIcon,
  PiArrowRight as SeeAllIcon,
  PiShoppingCartDuotone as AddToCartIcon,
  PiHeartDuotone as FavoriteIcon,
  PiEyeDuotone as ViewIcon,
  PiCaretDoubleUp,
  PiCaretDoubleUpDuotone,
  PiPawPrintDuotone,
  PiDogDuotone,
  PiCatDuotone,
  PiBoneDuotone,
  PiArrowLeft as BackIcon,
  PiArrowRight as ForwardIcon,
} from "react-icons/pi";
import { FaSearch as SearchIcon } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import { ProductSmallCard, ScrollableList } from "@/components";
import { fakeProducts } from "@/data/product";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { images } from "@/images";

const fakeFaqs = [
  {
    id: 1,
    question: "Ürünlerinizin kalitesi nedir?",
    answer: "Ürünlerimiz %100 orjinal ve kaliteli ürünlerdir.",
  },
  {
    id: 2,
    question: "Kargo süreniz nedir?",
    answer: "Kargo süremiz 1-3 iş günüdür.",
  },
  {
    id: 3,
    question: "İade süreciniz nasıl işliyor?",
    answer: "İade sürecimiz oldukça basittir. İade şartlarına uyduğunuz sürece iade alabilirsiniz.",
  },
  {
    id: 4,
    question: "Siparişimi nasıl takip edebilirim?",
    answer: "Siparişinizi takip etmek için üye girişi yaparak siparişlerim bölümünden takip edebilirsiniz.",
  },
  {
    id: 5,
    question: "Kargo ücreti dahil mi?",
    answer: "Kargo ücreti alıcıya aittir. 150 TL ve üzeri alışverişlerde kargo ücretsizdir.",
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <section className="w-full flex flex-col items-center justify-center gap-12 lg:gap-24 pb-24">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4 md:gap-8 lg:gap-12">
        <div className="flex flex-col items-center lg:items-start justify-center gap-2">
          <div className="relative">
            <motion.div initial={{ z: -15, x: 15 }} whileInView={{ z: 0, x: 0 }} transition={{ duration: 1 }}>
              <Money className="top-2 -right-12 absolute h-12 w-12 text-orange-500 drop-shadow-lg" />
            </motion.div>
            <h1 className={title({ className: "font-reddit text-default-800 text-4xl lg:text-5xl" })}>Uygun Fiyat</h1>
          </div>
          <div className="relative">
            <motion.div initial={{ z: 15, x: -15 }} whileInView={{ z: 0, x: 0 }} transition={{ duration: 1 }}>
              <Click className="-top-14 lg:top-0 -left-6 lg:-left-16 absolute h-16 w-16 text-orange-500 drop-shadow-lg " />
            </motion.div>
            <h1 className={title({ className: "font-reddit text-default-800 text-4xl lg:text-5xl" })}>Kaliteli Hizmet</h1>
          </div>
          <div className="bg-orange-100 rounded-lg w-full sm:w-auto flex items-center justify-center px-6 py-2 my-0 sm:my-2">
            <h1 className={title({ color: "yellow", className: "font-poppins text-3xl lg:text-4xl" })}>PAWRULES</h1>
          </div>
          <h5 className="text-justify text-default-500 text-sm md:text-lg leading-5 max-w-xl">
            %10 İndirim fırsatını kaçırma! Hemen alışverişe başla. Üstüne üstlük yapacağın her alışverişte puan biriktir, sonraki
            alışverişlerinde kullan. <br />
            <div className="flex flex-row items-center justify-center gap-2 mt-4">
              <Snippet hideSymbol color="primary">
                PAWRULES10GCRXL
              </Snippet>
              <Button className="flex items-center justify-center w-full bg-blue-500 text-white">Kodu Kullan</Button>
            </div>
          </h5>
          <div className="w-full mt-4 max-w-xl">
            <Input
              placeholder="Ne aramıştınız?"
              classNames={{
                inputWrapper: "rounded-lg bg-white h-12 ",
                input: "font-reddit text-md lg:text-lg text-default-800",
              }}
              endContent={<SearchIcon className="h-4 w-4 md:h-5 md:w-5 text-default-800" />}
            />
          </div>
        </div>
        <div className="relative flex">
          {/* <PiCaretDoubleUpDuotone className="absolute -top-8 -left-8 h-16 w-16 text-orange-500" /> */}
          {/* <div className="absolute top-0 hidden lg:flex flex-row items-start gap-3">
            <PiBoneDuotone className="h-16 w-16 text-stone-600" />
            <PiDogDuotone className="h-16 w-16 text-stone-600" />
            <PiCatDuotone className="h-16 w-16 text-stone-600" />
            <PiPawPrintDuotone className="h-16 w-16 text-stone-600" />
          </div> */}
          <motion.div
            initial={{ x: 10, y: -10 }}
            whileInView={{ x: 0, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:flex w-full h-full overflow-hidden rounded-[160px] bg-gradient-to-l from-orange-600 to-orange-500
          border-[8px] border-orange-100"
          >
            <Image loading="eager" fetchPriority="high" alt="Hero" className="object-cover object-center scale-x-[-1]" src={images.HeroImage} />
          </motion.div>
          <div className="w-full lg:w-auto lg:absolute -top-8 -right-8 grid grid-cols-2 lg:flex lg:flex-col items-start gap-2">
            <div className="w-full lg:w-[200px] flex flex-col items-start gap-2 py-2 px-6 rounded-2xl bg-stone-50 border border-stone-700">
              <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-3">
                <VirusIcon className="h-5 w-5 text-stone-900" />
                <h4 className="font-semibold text-stone-900 text-md">Sağlıklı Ürün</h4>
              </div>
            </div>
            <div className="w-full lg:w-[200px] flex flex-col items-start gap-2 py-2 px-6 rounded-2xl bg-stone-50 border border-stone-700">
              <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-3">
                <StarIcon className="h-5 w-5 text-stone-900" />
                <h4 className="font-semibold text-stone-900 text-md">Üstün Kalite</h4>
              </div>
            </div>
            <div className="w-full lg:w-[200px] flex flex-col items-start gap-2 py-2 px-6 rounded-2xl bg-stone-50 border border-stone-700">
              <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-3">
                <CarIcon className="h-5 w-5 text-stone-900" />
                <h4 className="font-semibold text-stone-900 text-md">Hızlı Teslim</h4>
              </div>
            </div>
            <div className="w-full lg:w-[200px] flex flex-col items-start gap-2 py-2 px-6 rounded-2xl bg-stone-50 border border-stone-700">
              <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-3">
                <PhoneIcon className="h-5 w-5 text-stone-900" />
                <h4 className="font-semibold text-stone-900 text-md">7/24 Destek</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-8">
        <Card
          shadow="none"
          className="group flex items-center h-48 bg-orange-100 text-default-700 lg:hover:scale-105 transition-transform duration-300 ease-in-out"
          isPressable
          onClick={() => router.push("/products?category=cat")}
        >
          <h6 className="font-poppins font-semibold text-orange-600 text-lg lg:text-xl mt-6">Kediler için</h6>
          <Image src={images.CategoryCat} alt="Kedi" className="mt-auto mx-auto w-32 h-32 max-h-32 transition-all lg:group-hover:scale-110" />
        </Card>
        <Card
          shadow="none"
          className="group flex items-center h-48 bg-orange-100 text-default-700 lg:hover:scale-105 transition-transform duration-300 ease-in-out"
          isPressable
          onClick={() => router.push("/products?category=dog")}
        >
          <h6 className="font-poppins font-semibold text-orange-600 text-lg lg:text-xl mt-6">Köpekler için</h6>
          <Image src={images.CategoryDog} alt="Köpek" className="mt-auto mx-auto w-32 h-32 max-h-32 transition-all lg:group-hover:scale-110" />
        </Card>
        <Card
          shadow="none"
          className="group flex items-center h-48 bg-orange-100 text-default-700 lg:hover:scale-105 transition-transform duration-300 ease-in-out"
          isPressable
          onClick={() => router.push("/products?category=supplies")}
        >
          <h6 className="font-poppins font-semibold text-orange-600 text-lg lg:text-xl mt-6">İhtiyaç & Aksesuar</h6>
          <Image
            src={images.CategorySupplies}
            alt="Malzemeler"
            className="mt-auto mx-auto w-64 h-32 max-h-32 transition-all lg:group-hover:scale-110"
          />
        </Card>
        <Card
          shadow="none"
          className="group flex items-center h-48 bg-orange-100 text-default-700 lg:hover:scale-105 transition-transform duration-300 ease-in-out"
          isPressable
          onClick={() => router.push("/products?category=discount")}
        >
          <h6 className="font-poppins font-semibold text-orange-600 text-lg lg:text-xl mt-6">İndirimler</h6>
          <Image
            src={images.CategoryPercentage}
            alt="İndirimler"
            className="mt-auto mx-auto w-32 h-32 max-h-32 transition-all lg:group-hover:scale-110"
          />
        </Card>
      </div>

      {/* New Arrivals */}
      <div className="w-full flex flex-col items-start justify-center gap-4 md:gap-8">
        <div className="flex flex-row items-center justify-between w-full">
          <h2 className="font-poppins text-orange-600 text-2xl lg:text-3xl">Yeni Ürünler</h2>
          <Link href="/products" className="flex items-center gap-2 text-orange-700">
            Tümünü Gör
            <SeeAllIcon className="text-orange-700 h-5 w-5" />
          </Link>
        </div>
        <ScrollableList>
          {fakeProducts.concat(fakeProducts).map((product) => (
            <ProductSmallCard key={product.id} product={product} onClick={() => router.push(`/products/${product.id}`)} className="min-w-72" />
          ))}
        </ScrollableList>
      </div>

      {/* Faqs */}
      <div className="w-full flex flex-col items-start justify-center gap-4 md:gap-8">
        <h2 className="font-poppins text-orange-600 text-2xl lg:text-3xl">Neyi Merak Ediyorsun?</h2>
        <Accordion
          variant="splitted"
          className="px-0"
          itemClasses={{
            title: "font-poppins text-default-800 text-md",
            content: "font-poppins text-default-500 text-md",
          }}
        >
          {fakeFaqs.map((faq) => (
            <AccordionItem key={faq.id} title={faq.question}>
              {faq.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
