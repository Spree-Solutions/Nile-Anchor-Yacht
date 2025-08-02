import { Home, Users, Ship, Image, Settings, Phone } from "lucide-react";

const NavigationItems = () => {
  return [
    {
      key: "home",
      label: "Home",
      href: "/",
      icon: Home,
    },
    {
      key: "about",
      label: "About Us",
      href: "/about",
      icon: Users,
    },
    {
      key: "weddings",
      label: "Weddings",
      href: "/weddings",
      icon: Ship,
    },
    {
      key: "business",
      label: "Business Events",
      href: "/business",
      icon: Settings,
    },
    {
      key: "gatherings",
      label: "Gatherings & Parties",
      href: "/gatherings",
      icon: Settings,
    },
    {
      key: "contact",
      label: "Contact Us",
      href: "/contact",
      icon: Phone,
    },
  ];
};

export default NavigationItems;
