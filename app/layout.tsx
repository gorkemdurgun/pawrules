import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { PiInstagramLogoDuotone as InstagramIcon, PiWhatsappLogoDuotone as WhatsappIcon, PiEnvelopeDuotone as GmailIcon } from "react-icons/pi";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={clsx("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col items-center h-full bg-orange-50">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow ">{children}</main>
            <footer className="w-full max-w-7xl flex items-center justify-between py-3 px-6">
              <div className="flex items-center gap-2">
                <p className="text-default-500 text-sm">
                  © {new Date().getFullYear()} {siteConfig.name}
                </p>
                <Link href="/privacy" className="text-default-500 text-sm hover:text-default-600">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-default-500 text-sm hover:text-default-600">
                  Terms of Service
                </Link>
              </div>
              <div className="hidden sm:flex gap-2">
                <Link isExternal aria-label="Instagram" href={siteConfig.links.instagram}>
                  <InstagramIcon className="text-default-500 w-6 h-6 hover:text-pink-600" />
                </Link>
                <Link isExternal aria-label="Whatsapp" href={siteConfig.links.whatsapp}>
                  <WhatsappIcon className="text-default-500 w-6 h-6 hover:text-green-600" />
                </Link>
                <Link isExternal aria-label="Gmail" href={siteConfig.links.gmail}>
                  <GmailIcon className="text-default-500 w-6 h-6 hover:text-red-600" />
                </Link>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
