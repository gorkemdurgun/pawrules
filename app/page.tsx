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
  PiVirusDuotone as VirusIcon,
  PiSparkleDuotone as StarIcon,
  PiTruckDuotone as CarIcon,
  PiPhoneCallDuotone as PhoneIcon,
  PiArrowRight as SeeAllIcon,
  PiShoppingCartDuotone as AddToCartIcon,
  PiHeartDuotone as FavoriteIcon,
  PiEyeDuotone as ViewIcon,
} from "react-icons/pi";
import { FaSearch as SearchIcon } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-12 py-8 md:py-10">
      <div className="grid grid-cols-[1fr,1fr] w-full gap-12">
        <div className="flex flex-col items-start justify-center gap-4">
          <div className="relative">
            <Money className=" top-4 -right-12 absolute h-12 w-12 text-orange-500" />
            <h1 className={title({ className: "font-reddit text-default-800 text-4xl lg:text-5xl" })}>Uygun Fiyat</h1>
          </div>
          <div className="relative">
            <Click className=" top-4 -left-16 absolute h-16 w-16 text-orange-500" />
            <h1 className={title({ className: "font-reddit text-default-800 text-4xl lg:text-5xl" })}>Kaliteli Hizmet</h1>
          </div>
          <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
            <h1 className={title({ color: "yellow", className: "text-5xl lg:text-6xl" })}>PAWRULES</h1>
          </motion.div>
          <h5 className="text-justify text-default-500 text-lg">
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

          {/*
          <h1 className={title({ className: "font-reddit text-default-800 text-4xl lg:text-5xl" })}>Uygun Fiyatlarla</h1>
          <h1 className={title({ className: "font-reddit text-default-800 text-4xl lg:text-5xl " })}>Kaliteli Hizmet</h1>
          <h1 className={title({ color: "orange", className: " font-reddit text-6xl lg:text-7xl" })}>PAWRULES</h1>
          */}
        </div>
        <div className="relative flex">
          <Image
            alt="Hero"
            className="z-0 w-full max-h-[600px]"
            src="https://i.ibb.co/GnRSwwx/grey-fluffy-domestic-cat-with-long-hair-showing-its-affection-brown-dog-with-long-hair-removebg.png"
          />
          <div className="absolute -top-8 -right-8 flex flex-col items-start gap-2">
            <div className="w-[200px] flex flex-col items-start gap-2 py-2 px-6 rounded-2xl bg-stone-50 border border-stone-700">
              <div className="flex flex-row items-center justify-center gap-3">
                <VirusIcon className="h-5 w-5 text-stone-900" />
                <h4 className="font-semibold text-stone-900 text-md">Antibakteriyel</h4>
              </div>
            </div>
            <div className="w-[200px] flex flex-col items-start gap-2 py-2 px-6 rounded-2xl bg-stone-50 border border-stone-700">
              <div className="flex flex-row items-center justify-center gap-3">
                <StarIcon className="h-5 w-5 text-stone-900" />
                <h4 className="font-semibold text-stone-900 text-md">Üstün Kalite</h4>
              </div>
            </div>
            <div className="w-[200px] flex flex-col items-start gap-2 py-2 px-6 rounded-2xl bg-stone-50 border border-stone-700">
              <div className="flex flex-row items-center justify-center gap-3">
                <CarIcon className="h-5 w-5 text-stone-900" />
                <h4 className="font-semibold text-stone-900 text-md">Hızlı Teslimat</h4>
              </div>
            </div>
            <div className="w-[200px] flex flex-col items-start gap-2 py-2 px-6 rounded-2xl bg-stone-50 border border-stone-700">
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
          <Card shadow="none">
            <CardBody>
              <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                <motion.div
                  className="relative col-span-6 md:col-span-4"
                  transition={{ delay: 0.5 }}
                  initial={{
                    x: -100,
                  }}
                  whileInView={{ x: 0 }}
                >
                  <Image
                    alt="Thumbnail"
                    className="object-cover transition-transform duration-300 ease-in-out"
                    width="100%"
                    height="100%"
                    src="https://ae01.alicdn.com/kf/S978b3390e818413ca9ac31c6fb337176e/Pokemon-Pikachu-Plush-Cat-Bed-Cute-Animation-Style-Pet-Basket-Soft-Toys-Pet-House-Dog-Sleep.jpg"
                  />
                </motion.div>

                <div className="h-full flex flex-col items-start justify-center gap-2 col-span-4 md:col-span-6">
                  <h3 className="font-reddit font-semibold text-foreground/90 text-3xl">Pixachu Kedi Yatağı</h3>
                  <p className="text-justify text-small text-foreground/80">
                    Kediler için özel tasarım yatak, ergonomik ve konforlu. Yapılan testlerde kedilerin bu yatakta uyurken daha mutlu oldukları
                    tespit edilmiştir. Ayrıca yatağın üzerindeki pikachu figürü ile evinizdeki kediye daha eğlenceli bir yaşam sunabilirsiniz.
                    Ürünümüz antibakteriyel özelliklere sahiptir. Tüm kedi ırklarına uygun bir boyuta sahiptir. %100 pamuk malzemeden üretilmiş
                    olup 30 derecede yıkanabilir. Ürünümüz 1 yıl garantilidir.
                  </p>
                  <div className="flex flex-wrap items-center justify-start gap-2 mt-4">
                    <Code color="default">#kedi</Code>
                    <Code color="default">#yatak</Code>
                    <Code color="default">#pikachu</Code>
                    <Code color="default">#kedi yatağı</Code>
                    <Code color="default">#kedi yatağı pikachu</Code>
                    <Code color="default">#kedi yatağı ergonomik</Code>
                    <Code color="default">#kedi yatağı konforlu</Code>
                  </div>
                </div>

                <div className="h-full flex flex-col items-center justify-start col-span-4 md:col-span-2">
                  <div className="rounded-xl bg-gray-100 py-2 px-6">
                    <h2 className="text-gray-900 text-2xl font-semibold">₺ 129.99</h2>
                  </div>
                  <div className="flex flex-col gap-2 mt-6">
                    <Button className="flex items-center justify-start gap-2">
                      <AddToCartIcon className="h-6 w-6" />
                      Sepete Ekle
                    </Button>
                    <Button className="flex items-center justify-start gap-2">
                      <FavoriteIcon className="h-6 w-6" />
                      Favorilere Ekle
                    </Button>
                    <Button className="flex items-center justify-start gap-2">
                      <ViewIcon className="h-6 w-6" />
                      Detayları Gör
                    </Button>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
