"use client";

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, HeartFilledIcon } from "@/components/icons";
import { Accordion, AccordionItem, Avatar, Button, Card, CardBody, Image, Input, Kbd } from "@nextui-org/react";
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
import { motion } from "framer-motion";
import { ProductSmallCard, ProductWideCard, ScrollableList } from "@/components";
import { fakeProducts } from "@/data/product";
import { useRef } from "react";
import { useRouter } from "next/navigation";

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
    <section className="w-full flex flex-col items-center justify-center gap-12 py-2 lg:py-10">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,1fr] w-full gap-4 md:gap-8 lg:gap-12">
        <div className="flex flex-col items-center lg:items-start justify-center gap-4">
          <div className="relative">
            <motion.div initial={{ z: -15, x: 15 }} whileInView={{ z: 0, x: 0 }} transition={{ duration: 1 }}>
              <Money className=" top-4 -right-12 absolute h-12 w-12 text-orange-500 drop-shadow-lg" />
            </motion.div>
            <h1 className={title({ className: "font-reddit text-default-800 text-4xl lg:text-5xl" })}>Uygun Fiyat</h1>
          </div>
          <div className="relative">
            <motion.div initial={{ z: 15, x: -15 }} whileInView={{ z: 0, x: 0 }} transition={{ duration: 1 }}>
              <Click className="-top-14 lg:top-0 -left-6 lg:-left-16 absolute h-16 w-16 text-orange-500 drop-shadow-lg " />
            </motion.div>
            <h1 className={title({ className: "font-reddit text-default-800 text-4xl lg:text-5xl" })}>Kaliteli Hizmet</h1>
          </div>
          <motion.div initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
            <h1 className={title({ color: "yellow", className: "font-poppins text-5xl lg:text-6xl" })}>PAWRULES</h1>
          </motion.div>
          <h5 className="text-justify text-default-500 text-sm md:text-lg leading-5">
            %10 İndirim fırsatını kaçırma! Hemen alışverişe başla. Üstüne üstlük yapacağın her alışverişte puan biriktir, sonraki
            alışverişlerinde kullan. <br />
            <div className="flex flex-row items-center justify-center gap-2 mt-4">
              <Snippet hideSymbol color="primary">
                PAWRULES10GCRXL
              </Snippet>
              <Button className="flex items-center justify-center w-full bg-blue-500 text-white">Kodu Kullan</Button>
            </div>
          </h5>
          <div className="w-full mt-4">
            <Input
              placeholder="Ne aramıştınız?"
              classNames={{
                inputWrapper: "rounded-lg bg-white h-16",
                input: "font-reddit text-xl text-default-800",
              }}
              endContent={<SearchIcon className="h-6 w-6 text-default-800" />}
            />
          </div>
        </div>
        <div className="relative flex">
          {/* <PiCaretDoubleUpDuotone className="absolute -top-8 -left-8 h-16 w-16 text-orange-500" /> */}
          <div className="absolute top-0 hidden lg:flex flex-row items-start gap-3">
            <PiBoneDuotone className="h-16 w-16 text-stone-600" />
            <PiDogDuotone className="h-16 w-16 text-stone-600" />
            <PiCatDuotone className="h-16 w-16 text-stone-600" />
            <PiPawPrintDuotone className="h-16 w-16 text-stone-600" />
          </div>
          <Image
            loading="eager"
            fetchPriority="high"
            alt="Hero"
            className="hidden lg:flex z-0 w-full max-h-[600px]"
            src="https://i.ibb.co/GnRSwwx/grey-fluffy-domestic-cat-with-long-hair-showing-its-affection-brown-dog-with-long-hair-removebg.png"
          />
          <div className="w-full lg:w-auto lg:absolute -top-8 -right-8 grid grid-cols-2 lg:flex lg:flex-col items-start gap-2">
            <div className="w-full lg:w-[200px] flex flex-col items-start gap-2 py-2 px-6 rounded-2xl bg-stone-50 border border-stone-700">
              <div className="flex flex-row items-center justify-center gap-3">
                <VirusIcon className="h-5 w-5 text-stone-900" />
                <h4 className="font-semibold text-stone-900 text-md">Sağlıklı Ürün</h4>
              </div>
            </div>
            <div className="w-full lg:w-[200px] flex flex-col items-start gap-2 py-2 px-6 rounded-2xl bg-stone-50 border border-stone-700">
              <div className="flex flex-row items-center justify-center gap-3">
                <StarIcon className="h-5 w-5 text-stone-900" />
                <h4 className="font-semibold text-stone-900 text-md">Üstün Kalite</h4>
              </div>
            </div>
            <div className="w-full lg:w-[200px] flex flex-col items-start gap-2 py-2 px-6 rounded-2xl bg-stone-50 border border-stone-700">
              <div className="flex flex-row items-center justify-center gap-3">
                <CarIcon className="h-5 w-5 text-stone-900" />
                <h4 className="font-semibold text-stone-900 text-md">Hızlı Teslim</h4>
              </div>
            </div>
            <div className="w-full lg:w-[200px] flex flex-col items-start gap-2 py-2 px-6 rounded-2xl bg-stone-50 border border-stone-700">
              <div className="flex flex-row items-center justify-center gap-3">
                <PhoneIcon className="h-5 w-5 text-stone-900" />
                <h4 className="font-semibold text-stone-900 text-md">7/24 Destek</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Arrivals */}
      <div className="w-full flex flex-col items-start justify-center gap-4 md:gap-8 py-8 md:py-10">
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
      <div className="w-full flex flex-col items-start justify-center gap-4 md:gap-8 py-8 md:py-10">
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
