export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "PAWRULES",
  description: "PAWRULES, evcil hayvanlarınız için en uygun fiyatlarla en kaliteli hizmeti sunar.",
  navItems: [
    {
      label: "Ana Sayfa",
      href: "/",
    },
    {
      label: "Ürünler",
      href: "/products",
    },
    {
      label: "Hakkımızda",
      href: "/about",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "İletişim",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    instagram: "https://instagram.com/paw.rules",
    gmail: "mailto:pawrulesinfo@gmail.com",
    whatsapp: "https://wa.me/6281212345678",
  },
};
