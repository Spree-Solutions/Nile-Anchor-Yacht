import { useState, useEffect } from "react";
import AppLogo from "../AppLogo";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import Container from "../Container";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50" : "bg-transparent"
      }`}
    >
      <Container>
        <div className={`flex items-center justify-between h-16 ${isScrolled ? "lg:h-16" : "lg:h-20"}`}>
          {/* Logo */}
          <div className={`flex-shrink-0 transition-all duration-300 ${isScrolled ? "scale-90" : "scale-100"}`}>
            <AppLogo className={isScrolled ? "text-black" : "text-white"} />
          </div>

          {/* Desktop Navigation */}
          <DesktopNavigation isScrolled={isScrolled} />

          {/* Mobile Navigation */}
          <MobileNavigation isScrolled={isScrolled} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
