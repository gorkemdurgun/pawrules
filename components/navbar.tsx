import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon, Logo } from "@/components/icons";
import {
  PiInstagramLogoDuotone as InstagramIcon,
  PiWhatsappLogoDuotone as WhatsappIcon,
  PiEnvelopeDuotone as GmailIcon,
  PiPawPrintDuotone as LogoIcon,
} from "react-icons/pi";
import Image from "next/image";
import { images } from "@/images";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />}
      type="search"
    />
  );

  return (
    <NextUINavbar maxWidth="xl" position="sticky" >
      <NavbarContent className="basis-1/5 sm:basis-full " justify="start">
        <NavbarBrand as="li" className="gap-3">
          <NextLink className="flex justify-start items-end gap-1" href="/">
            {/* <div className="relative w-14 h-16">
              <Image alt="Logo" src={images.Logo} layout="fill" />
            </div> */}
            <p className="text-2xl text-orange-600 font-reddit font-semibold text-inherit">PAWRULES</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex basis-3/5 sm:basis-full" justify="center">
        <ul className="hidden lg:flex gap-6 justify-start">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground", className: "font-reddit" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden sm:flex gap-2">
          <Button className="bg-blue-100 text-blue-500">Giriş Yap</Button>
          <Button className="bg-blue-100 text-blue-500">Kayıt Ol</Button>
          {/* <ThemeSwitch /> */}
        </NavbarItem>
        {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        {/* <Link isExternal aria-label="Whatsapp" href={siteConfig.links.whatsapp}>
          <WhatsappIcon className="text-default-500" />
        </Link> */}
        {/* <ThemeSwitch /> */}
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {/* {searchInput} */}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color={index === 2 ? "primary" : index === siteConfig.navMenuItems.length - 1 ? "danger" : "foreground"} href="#" size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
