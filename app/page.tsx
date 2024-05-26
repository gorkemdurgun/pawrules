"use client";

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, HeartFilledIcon } from "@/components/icons";
import { Avatar, Button, Card, CardBody, Image, Input, Kbd, Slider } from "@nextui-org/react";
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
} from "react-icons/pi";
import { FaSearch as SearchIcon } from "react-icons/fa";
import { motion } from "framer-motion";
import { ProductWideCard } from "@/components";
import { fakeProducts } from "@/data/product";

export default function Home() {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-12 py-2 lg:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,1fr] w-full gap-8 lg:gap-12">
        <div className="flex flex-col items-center lg:items-start justify-center gap-4">
          <div className="relative">
            <Money className=" top-4 -right-12 absolute h-12 w-12 text-orange-500 drop-shadow-lg" />
            <h1 className={title({ className: "font-reddit text-default-800 text-4xl lg:text-5xl" })}>Uygun Fiyat</h1>
          </div>
          <div className="relative">
            <Click className="-top-14 lg:top-0 -left-6 lg:-left-16 absolute h-16 w-16 text-orange-500 drop-shadow-lg" />
            <h1 className={title({ className: "font-reddit text-default-800 text-4xl lg:text-5xl" })}>Kaliteli Hizmet</h1>
          </div>
          <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
            <h1 className={title({ color: "yellow", className: "text-5xl lg:text-6xl" })}>PAWRULES</h1>
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

      <div className="w-full flex flex-col items-start justify-center gap-4 md:gap-8 py-8 md:py-10">
        <div className="flex flex-row items-center justify-between w-full">
          <h2 className="font-reddit text-orange-600 text-2xl lg:text-3xl">ÇOK SATANLAR</h2>
          <Link href="/products" className="flex items-center gap-2 text-orange-700">
            Tümünü Gör
            <SeeAllIcon className="text-orange-700 h-5 w-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 w-full">
          {fakeProducts.map((product) => (
            <ProductWideCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
