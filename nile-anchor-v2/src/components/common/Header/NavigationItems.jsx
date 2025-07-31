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
      key: "yachts",
      label: "Yacht Collections",
      href: "/yachts",
      icon: Ship,
    },
    {
      key: "gallery",
      label: "Gallery",
      href: "/gallery",
      icon: Image,
    },
    {
      key: "services",
      label: "Our Services",
      href: "/services",
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
